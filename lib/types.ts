export interface Guest {
  id: string
  name: string
  email?: string
  hasPlusOne: boolean
  plusOneName?: string
}

export interface RSVPData {
  guestId: string
  guestName: string
  attending: boolean
  plusOneName?: string
  email?: string
  // sendConfirmation: boolean
  message?: string
}
