"use client";

import React, { useMemo } from "react";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Badge } from "@/components/ui/badge";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import {
  Plus,
  Trash2,
  Loader2,
  Users,
  UserPlus,
  CheckCircle2,
  XCircle,
  LogOut,
  Pencil,
  Search,
  X,
} from "lucide-react";
import { Textarea } from "../ui/textarea";

interface Rsvp {
  id: string;
  attending: boolean;
  plusOneName: string | null;
  email: string | null;
  message: string | null;
}

interface Guest {
  id: string;
  name: string;
  hasPlusOne: boolean;
  createdAt: string;
  rsvp: Rsvp | null;
}

interface GuestManagerProps {
  onLogout: () => void;
}

export function GuestManager({ onLogout }: GuestManagerProps) {
  const [guests, setGuests] = useState<Guest[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [newGuestName, setNewGuestName] = useState("");
  const [newGuestPlusOne, setNewGuestPlusOne] = useState(false);
  const [isAdding, setIsAdding] = useState(false);
  const [deletingId, setDeletingId] = useState<string | null>(null);
  const [editingGuest, setEditingGuest] = useState<Guest | null>(null);
  const [isEditDialogOpen, setIsEditDialogOpen] = useState(false);
  const [isSavingEdit, setIsSavingEdit] = useState(false);
  const [guestToDelete, setGuestToDelete] = useState<Guest | null>(null);
  const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false);

  const [searchQuery, setSearchQuery] = useState("");
  const [filterStatus, setFilterStatus] = useState("all");

  const fetchGuests = async () => {
    try {
      const response = await fetch("/api/admin/guests");
      if (!response.ok) {
        console.error("Error fetching guests: Response not ok");
        return;
      }
      const data = await response.json();
      if (Array.isArray(data)) {
        // Sort alphabetically by name
        const sortedData = [...data].sort((a, b) => 
          a.name.toLowerCase().localeCompare(b.name.toLowerCase())
        );
        setGuests(sortedData);
      }
    } catch (error) {
      console.error("Error fetching guests:", error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchGuests();
  }, []);

  const filteredGuests = useMemo(() => {
    return guests.filter((guest) => {
      const nameMatch = guest.name.toLowerCase().includes(searchQuery.toLowerCase());
      const plusOneMatch = guest.rsvp?.plusOneName?.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesSearch = nameMatch || plusOneMatch;

      let matchesStatus = true;
      if (filterStatus === "attending") matchesStatus = guest.rsvp?.attending === true;
      else if (filterStatus === "decline") matchesStatus = guest.rsvp?.attending === false;
      else if (filterStatus === "pending") matchesStatus = guest.rsvp === null;

      return matchesSearch && matchesStatus;
    });
  }, [guests, searchQuery, filterStatus]);

  const handleAddGuest = async (e: React.FormEvent) => {
    e.preventDefault();
    
    const namesArray = newGuestName
      .split("\n")
      .map((name) => name.trim())
      .filter((name) => name !== "");

    if (namesArray.length === 0) return;

    setIsAdding(true);
    try {
      const requests = namesArray.map(name => 
        fetch("/api/admin/guests", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ name, hasPlusOne: newGuestPlusOne }),
        })
      );

      await Promise.all(requests);

      setNewGuestName("");
      setNewGuestPlusOne(false);
      fetchGuests();
    } catch (error) {
      console.error("Error adding guest:", error);
    } finally {
      setIsAdding(false);
    }
  };

  const handleDeleteGuest = async (id: string) => {
    setDeletingId(id);
    try {
      const response = await fetch(`/api/admin/guests?id=${id}`, {
        method: "DELETE",
      });

      if (response.ok) {
        setGuests(guests.filter((g) => g.id !== id));
      }
    } catch (error) {
      console.error("Error deleting guest:", error);
    } finally {
      setDeletingId(null);
      setIsDeleteDialogOpen(false);
      setGuestToDelete(null);
    }
  };

  const openDeleteDialog = (guest: Guest) => {
    setGuestToDelete(guest);
    setIsDeleteDialogOpen(true);
  };

  const handleTogglePlusOne = async (id: string, currentValue: boolean) => {
    setIsSavingEdit(true);
    try {
      const response = await fetch("/api/admin/guests", {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          id,
          hasPlusOne: !currentValue,
        }),
      });

      if (response.ok) {
        setGuests(
          guests.map((g) =>
            g.id === id ? { ...g, hasPlusOne: !currentValue } : g
          )
        );
        // Small delay to show success before closing
        setTimeout(() => {
          setIsSavingEdit(false);
          setIsEditDialogOpen(false);
          setEditingGuest(null);
        }, 500);
      } else {
        setIsSavingEdit(false);
      }
    } catch (error) {
      console.error("Error updating guest:", error);
      setIsSavingEdit(false);
    }
  };

  const openEditDialog = (guest: Guest) => {
    setEditingGuest(guest);
    setIsEditDialogOpen(true);
  };

  // Calculate stats including plus ones who have names filled in
  const attendingGuests = guests.filter((g) => g.rsvp?.attending);
  const attendingWithPlusOne = attendingGuests.filter(
    (g) => g.hasPlusOne && g.rsvp?.plusOneName
  );

  const stats = {
    total: guests.length,
    responded: guests.filter((g) => g.rsvp).length,
    attending: attendingGuests.length + attendingWithPlusOne.length,
    declined: guests.filter((g) => g.rsvp && !g.rsvp.attending).length,
    withPlusOne: guests.filter((g) => g.hasPlusOne).length,
    confirmedPlusOnes: attendingWithPlusOne.length,
  };

  return (
    <div className="bg-background">
      <header className="border-b bg-card">
        <div className="container mx-auto flex items-center justify-between px-4 py-4">
          <div>
            <h1 className="font-serif text-2xl font-semibold text-foreground">
              Guest List Manager
            </h1>
            <p className="text-sm text-muted-foreground">
              Manage your wedding guest list
            </p>
          </div>
          <Button variant="outline" onClick={onLogout}>
            <LogOut className="mr-2 h-4 w-4" />
            Logout
          </Button>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        {/* Stats Cards */}
        <div className="mb-8 grid gap-4 grid-cols-2 lg:grid-cols-4">
          <Card className="py-4 md:py-6">
            <CardContent className="flex items-center gap-4 px-4 md:px-6">
              <div className="rounded-full bg-primary/10 p-3 hidden sm:inline-block">
                <Users className="h-5 w-5 text-primary" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Total Guests</p>
                <p className="text-2xl font-semibold">{stats.total}</p>
              </div>
            </CardContent>
          </Card>
          <Card className="py-4 md:py-6">
            <CardContent className="flex items-center gap-4 px-4 md:px-6">
              <div className="rounded-full bg-green-500/10 p-3 hidden sm:inline-block">
                <CheckCircle2 className="h-5 w-5 text-green-500" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Attending</p>
                <p className="text-2xl font-semibold">{stats.attending}</p>
                {stats.confirmedPlusOnes > 0 && (
                  <p className="text-xs text-muted-foreground">
                    &#40;Include plus one{stats.confirmedPlusOnes > 1 ? "s" : ""}&#41;
                  </p>
                )}
              </div>
            </CardContent>
          </Card>
          <Card className="py-4 md:py-6">
            <CardContent className="flex items-center gap-4 px-4 md:px-6">
              <div className="rounded-full bg-red-500/10 p-3 hidden sm:inline-block">
                <XCircle className="h-5 w-5 text-red-500" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Declined</p>
                <p className="text-2xl font-semibold">{stats.declined}</p>
              </div>
            </CardContent>
          </Card>
          <Card className="py-4 md:py-6">
            <CardContent className="flex items-center gap-4 px-4 md:px-6">
              <div className="rounded-full bg-blue-500/10 p-3 hidden sm:inline-block">
                <UserPlus className="h-5 w-5 text-blue-500" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Guest With +1</p>
                <p className="text-2xl font-semibold">{stats.withPlusOne}</p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Add Guest Form */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="text-base">Add New Guest</CardTitle>
            <CardDescription>
              Add guests to your wedding invitation list
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleAddGuest} className="flex flex-col gap-4 sm:flex-row sm:items-end">
              <div className="flex-1">
                <Textarea
                  placeholder="John Doe&#10;Jane Smith&#10;Bob Wilson"
                  value={newGuestName}
                  onChange={(e) => setNewGuestName(e.target.value)}
                  className="min-h-[120px] resize-none font-sans"
                />
              </div>
              <label
                htmlFor="plusOne"
                className={`flex h-10 cursor-pointer items-center justify-center gap-2 rounded-md border px-4 transition-colors ${
                  newGuestPlusOne
                    ? "border-foreground bg-foreground/5"
                    : "border-input hover:bg-accent"
                }`}
              >
                <Checkbox
                  id="plusOne"
                  checked={newGuestPlusOne}
                  onCheckedChange={(checked) => setNewGuestPlusOne(checked as boolean)}
                />
                <span className="text-sm font-medium whitespace-nowrap">
                  Allow +1
                </span>
              </label>
              <Button type="submit" disabled={isAdding || !newGuestName.trim()} className="h-10">
                {isAdding ? (
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                ) : (
                  <Plus className="mr-2 h-4 w-4" />
                )}
                Add Guest
              </Button>
            </form>
          </CardContent>
        </Card>

        {/* Guest List */}
        <Card>
          <CardHeader>
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <CardTitle>Guest List</CardTitle>
                <CardDescription>
                  {stats.responded} of {stats.total} guests have responded
                </CardDescription>
              </div>

              {/* Search Bar Implementation */}
              <div className="relative w-full sm:max-w-xs">
                <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                <Input
                  placeholder="Search guests..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-9 pr-9"
                />
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery("")}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                  >
                    <X className="h-4 w-4" />
                  </button>
                )}
              </div>
            </div>
            <div className="flex flex-wrap gap-2">
              {[
                { id: "all", label: "All" },
                { id: "attending", label: "Attending" },
                { id: "decline", label: "Declined" },
                { id: "pending", label: "Pending" },
              ].map((filter) => (
                <Button
                  key={filter.id}
                  variant={filterStatus === filter.id ? "default" : "outline"}
                  size="sm"
                  onClick={() => setFilterStatus(filter.id)}
                  className="rounded-full px-4 h-8 text-xs font-medium"
                >
                  {filter.label}
                </Button>
              ))}
            </div>
          </CardHeader>
          <CardContent>
            {isLoading ? (
              <div className="flex items-center justify-center py-12">
                <Loader2 className="h-8 w-8 animate-spin text-muted-foreground" />
              </div>
            ) : filteredGuests.length === 0 ? (
                <div className="py-12 text-center text-muted-foreground">
                  {searchQuery 
                    ? `No guests found matching "${searchQuery}"`
                    : "No guests added yet. Add your first guest above."}
                </div>
            ) : (
              <div className="space-y-3">
                {filteredGuests.map((guest) => (
                  <div
                    key={guest.id}
                    className="flex flex-col gap-3 rounded-lg border bg-card p-4 sm:flex-row sm:items-center sm:justify-between"
                  >
                    <div className="flex-1 space-y-1">
                      <div className="flex flex-wrap items-center gap-2">
                        <span className="font-medium">{guest.name}</span>
                        {guest.hasPlusOne && (
                          <Badge variant="outline" className="text-xs">
                            +1 Allowed
                          </Badge>
                        )}
                      </div>
                      <div className="flex flex-wrap items-center gap-2 text-sm">
                        {guest.rsvp ? (
                          guest.rsvp.attending ? (
                            <Badge className="bg-green-500/10 text-green-600 hover:bg-green-500/20">
                              Attending
                            </Badge>
                          ) : (
                            <Badge
                              variant="secondary"
                              className="bg-red-500/10 text-red-600"
                            >
                              Declined
                            </Badge>
                          )
                        ) : (
                          <Badge variant="outline">Pending</Badge>
                        )}
                        {guest.rsvp?.plusOneName && (
                          <span className="text-muted-foreground">
                            with {guest.rsvp.plusOneName}
                          </span>
                        )}
                      </div>
                    </div>
                    <div className="flex items-center gap-1 self-end sm:self-center">
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => openEditDialog(guest)}
                        className="h-9 w-9 p-0"
                      >
                        <Pencil className="h-4 w-4" />
                        <span className="sr-only">Edit</span>
                      </Button>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => openDeleteDialog(guest)}
                        disabled={deletingId === guest.id}
                        className="h-9 w-9 p-0 text-destructive hover:bg-destructive/10 hover:text-destructive"
                      >
                        {deletingId === guest.id ? (
                          <Loader2 className="h-4 w-4 animate-spin" />
                        ) : (
                          <Trash2 className="h-4 w-4" />
                        )}
                        <span className="sr-only">Delete</span>
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </CardContent>
        </Card>
      </main>

      {/* Edit Guest Dialog */}
      <Dialog open={isEditDialogOpen} onOpenChange={(open) => {
        if (!isSavingEdit) {
          setIsEditDialogOpen(open);
        }
      }}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Edit Guest</DialogTitle>
            <DialogDescription>
              Update plus one settings for {editingGuest?.name}
            </DialogDescription>
          </DialogHeader>
          {editingGuest && (
            <div className="space-y-4 py-4">
              <div className="flex items-center justify-between rounded-lg border p-4">
                <div>
                  <p className="font-medium">Allow Plus One</p>
                  <p className="text-sm text-muted-foreground">
                    Guest can bring an additional person
                  </p>
                </div>
                {isSavingEdit ? (
                  <Loader2 className="h-5 w-5 animate-spin text-primary" />
                ) : (
                  <Checkbox
                    checked={editingGuest.hasPlusOne}
                    onCheckedChange={() =>
                      handleTogglePlusOne(editingGuest.id, editingGuest.hasPlusOne)
                    }
                  />
                )}
              </div>
            </div>
          )}
          <DialogFooter>
            <Button
              variant="outline"
              onClick={() => setIsEditDialogOpen(false)}
              disabled={isSavingEdit}
            >
              {isSavingEdit ? "Saving..." : "Close"}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Delete Confirmation Dialog */}
      <AlertDialog open={isDeleteDialogOpen} onOpenChange={setIsDeleteDialogOpen}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Delete Guest</AlertDialogTitle>
            <AlertDialogDescription>
              Are you sure you want to remove{" "}
              <span className="font-medium text-foreground">
                {guestToDelete?.name}
              </span>{" "}
              from your guest list? This action cannot be undone and will also
              delete their RSVP if they have responded.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel disabled={deletingId !== null}>
              Cancel
            </AlertDialogCancel>
            <AlertDialogAction
              onClick={() => guestToDelete && handleDeleteGuest(guestToDelete.id)}
              disabled={deletingId !== null}
              className="bg-destructive text-destructive-foreground hover:bg-destructive/90"
            >
              {deletingId !== null ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Deleting...
                </>
              ) : (
                "Delete"
              )}
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
}
