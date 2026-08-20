export const mockUser = {
  name: "Elena Martín",
  email: "elena.martin@example.com",
  avatar: "https://i.pravatar.cc/150?u=wanderlust-explorer",
  joinedAt: "2024-03-12",
};

export interface MockBooking {
  id: string;
  title: string;
  date: string;
  people: number;
  total: number;
}

export const mockBookingHistory: MockBooking[] = [
  { id: "book-01", title: "Cata de vinos en Sevilla", date: "2025-11-02", people: 2, total: 146 },
  { id: "book-02", title: "Ruta de senderismo por Chamonix", date: "2025-08-21", people: 4, total: 380 },
  { id: "book-03", title: "Circuito termal en Baqueira Beret", date: "2025-05-09", people: 2, total: 190 },
];
