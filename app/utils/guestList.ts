// Lista de invitados autorizados
// Actualiza este array con los nombres de los invitados
export const guestList: string[] = [
  'Andrés Felipe Rubio Castro',
  'María Isabel Marín',
  'María Lorena Castro',
  'Rosa',
  'Belarmino',
  'José Sebastián Rubio',
  'Eduardo Marín',
  'Mariotty Severiche',
  'Laura Marín',
  'Juan Esteban Velásquez',
  'Jenny Marín',
  'Sarah Figueroa',
  'Óscar Eduardo Ampudia',
  'Alix Marín',
  'Leonisa Marín',
  'Cenelia Marín',
  'Daniel Marín',
  'Liliana',
  'Olmedo Marín',
  'Angela María Builes',
  'Mauricio Buitrago',
  'Pablo Esteban Buitrago',
  'Elizabeth Buitrago',
  'Marleny Toro',
  'Sandra Toro',
  'Fabián Toro',
  'Rosemberg',
  'Carolina Marín',
  'Jorge Villafañe',
  'Melany Solarte',
  'Nora Estefanía Rodríguez',
  'Estefanía Quiroga',
  'Carlos Camacho',
  'Valentina Morales',
  'Sebastián Trejos',
  'Luis Miguel',
  'Mariana',
  'Salomé',
  'Jefferson',
  
  // Agrega más nombres aquí
];

// Función para verificar si un nombre está en la lista (case-insensitive)
export function isAuthorizedGuest(name: string): boolean {
  const normalizedName = name.trim().toLowerCase();
  return guestList.some(
    (guest) => guest.toLowerCase() === normalizedName
  );
}

