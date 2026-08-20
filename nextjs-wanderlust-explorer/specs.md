# Wanderlust Explorer

Vamos a crear el explorador de una plataforma de búsqueda de experiencias únicas alrededor del mundo. Vamos a abarcar desde rutas para descubrir la gastronomía de distintos lugares como dar un paseo en vela por el Mediterráneo.

## Páginas

### Home: 
 * Section hero con un botón cta que navega a /experiences.
 * Sección destacada con un grid de las 4 experiencias mejor valoradas.
 * Sección de categorías con tarjetas visuales de acceso rápido.

### Experiences:
 * Listado completo de tarjetas, nav en el lateral izquierdo con los filtros:
  * Categoría: Gastronomía, Aventura y Naturaleza, Cultura, Relax, Entretenimiento, Escapadas.
  * Destino: Montaña, Playa, Ciudad, Rural, Nieve, Costa, Islas, Interior. 
  * ¿Cuántos sois?: Pareja, Grupo de amigos, Familia, Solo.
  * Precio: Una barra desplazable de rango doble, donde se puede especificar tanto el precio mínimo como el máximo de forma independiente (El min por defecto será el de la experiencia mas económica y el max, el de la experiencia mas cara).
 * Mobile-first: las tarjetas se muestran en una columna (1x1) en formato 9:16. A partir de tablet se adopta un layout masonry, donde el ancho y alto de las tarjetas es variable y se reordena automáticamente según el tamaño de pantalla, ampliando el número de columnas hasta PC.
 * En movil el nav lateral colapsa en un menú hamburguesa.
 * Si no hay resultados con los filtros aplicados, se muestra un mensaje informativo con un botón para limpiar filtros.

### Experiences/[id]:
 * Información completa de la experiencia seleccionada por el usuario, obtenida del dataset local por su ID:
  * Galería de fotos o imagen principal en grande.
  * Título, destino, categoría y rating con número de opiniones.
  * Descripción detallada y lista con lo que incluye la experiencia.
  * Caja lateral o inferior de reserva simulada con selector de personas, selector de fecha, cálculo de precio total y botón "Reservar ahora" que redirige a la página mock estática de confirmación de reserva.
  * Botón de añadir a favoritos que sincroniza con el estado global.
  * Botón para volver atrás a la lista de experiencias.

### Favs:
 * Lista de experiencias que el usuario ha marcado como favoritas (Guardadas en estado de componentes).
 * Si la lista está vacía, se muestra un estado vacío con una ilustración/icono y un botón para explorar experiencias.
 * Las tarjetas de favoritos tienen la misma estructura y permiten quitar el favorito directamente con el corazón.

### Profile:
 * Página estética con un perfil de usuario simulado y un resumen con el número de favs guardados.
 * Datos del usuario: avatar, nombre, correo y fecha de registro simulada, hardcodeados directamente (sin archivo de datos aparte).
 * Pestañas o accesos directos a "Mis Favoritos" y "Historial de reservas simuladas".

### Booking (mock estático):
 * Página estática a la que redirige el botón "Reservar ahora".
 * Simula la confirmación de una reserva (mensaje de éxito, resumen básico) sin lógica ni persistencia real.

## Comportamiento de la búsqueda

La búsqueda debe filtrar las experiencias cuyo título coincida con el término buscado. Usa una regex case-insensitive para esto: algo como /term/i. El filtro por categoría y destino debe funcionar de forma independiente y combinarse con la búsqueda.

## Favs

Un icono de corazón en cada tarjeta debe activar o desactivar la experiencia en la lista de favs del usuario. Los favs se guardan en un useState de nivel superior y se pasan hacia abajo como props donde sea necesario. No se requiere persistencia por ahora.

## Estructura de Datos (Dataset Local)

El dataset de experiencias será un array de objetos en un archivo local (`src/data/experiences.ts`) con 100 experiencias y la siguiente forma:

 * `id`: string único (ej. "exp-01").
 * `title`: string con el nombre de la experiencia.
 * `category`: Gastronomía, Aventura y Naturaleza, Cultura, Relax, Entretenimiento o Escapadas.
 * `destination`: Montaña, Playa, Ciudad, Rural, Nieve, Costa, Islas o Interior.
 * `location`: string con la ciudad/país (ej. "La Rioja, España").
 * `groupType`: Pareja, Grupo de amigos, Familia o Solo.
 * `price`: number (precio por persona en euros).
 * `rating`: number con un decimal del 0.0 al 5.0.
 * `reviewsCount`: number con el total de votos.
 * `image`: string con la URL de la imagen.
 * `description`: string largo con el detalle de la actividad.
 * `included`: array de strings con los elementos incluidos (ej. `["Guía local", "Cata de vinos", "Aperitivo"]`).

## Componentes

 * nav: 
  - a la izquierda el logo, seguido de un botón icono para alternar entre modo dark y light (en móvil, si el logo colapsa junto al menú hamburguesa, este botón se coloca al lado del icono de menú hamburguesa).
  - en el centro los links "Home", "Experiences", "Favs"
  - a la derecha una barra de búsqueda "Introduce destino" 
  - a su derecha un botón icon de usuario que al pulsar despliega un modal con "Ir a mi perfil" y cerrar sesion (en rojo).

 * search bar: 
  - actualiza los resultados de búsqueda con cada letra sin recargar la página entera.

 * hero section:
  - h1 "Descubre experiencias que cambian tu mundo"
  - subtitulo "Desde rutas gastronómicas hasta aventuras en vela por el Mediterraneo".

 * buttons: 
  - alto contraste tanto en el modo dark como en light
  - bordes ligeramente redondeados
  - letras en bold
  - fondo con color secundario de la web.

 * tarjetas: 
  - mobile-first, formato 9:16. A partir de tablet se integran en un layout masonry: ancho y alto variables, reordenándose automáticamente según el tamaño de pantalla.
  - mitad superior de la tarjeta:
   - una imagen que ocupa toda la mitad.
   - en la esquina superior izquierda una badge con el icono de la categoría y la categoría, por ejemplo "(icon) Gastronomía".
   - en la esquina superior derecha, un icon corazon que por defecto es solo el borde del corazón con fondo blanco y al hacer clic el corazón se colorea de rojo.
  - segunda mitad de la tarjeta:
   - en la esquina superior izquierda un icon gps seguido del nombre de destino ejemplo "(icon) costa rica".
   - en la mitad un h3 con título ejemplo "Cata de vinos en la Rioja"
   - esquina inferior izquierda "from" y debajo el precio.
   - esquina inferior derecha un icono de una estrella solo su borde sin relleno del mismo color que el precio, seguido de la nota (min 0.0 a max 5) y entre parentesis y letra mas pequeña el número de votos.

 * filter sidebar:
  - contenedor vertical con acordeones o bloques separados por cada grupo de filtro (Categoría, Destino, Grupo, Precio).
  - botón en la parte inferior para "Limpiar todos los filtros".
  - en vista móvil, se abre como un drawer lateral que cubre la pantalla con botón de cerrar (X).

 * empty state:
  - bloque centrado con icono sutil, texto explicativo ("No se encontraron resultados") y botón de acción principal.

## Tecnologías
 - Aplicación multipágina con React, Next.js (App Router, `src/app/`) y Tailwind CSS sin librerías externas.
 - Buenas prácticas, usamos TypeScript, const siempre a menos que sea necesario usar let.
 - Los componentes no pueden tener mas de 80 líneas de código, si superan las 80 se dividen en componentes mas pequeños.
 - No creamos CSS aparte ni inline a menos que sea estrictamente necesario.

## Rol
 - Eres un desarrollador senior experto en React y Next.js, te diferencias de los demás por tus buenas prácticas, generar un código de calidad y por no utilizar diseños genéricos de IA.

## Paleta de Color, Tipografía y Capas (Algoritmo del Pintor)

Aplicamos la paleta personalizada extendiendo la configuración de Tailwind:

 * Paleta base:
  - Primario: `#0D2C33` (Verde petróleo profundo / Fondo oscuro / Acentos elegantes)
  - Secundario: `#FF9D42` (Naranja cálido / Botones, CTAs y destacados)
  - Terciario / Superficie clara: `#F4F1EA` (Blanco roto arena / Fondo light y tarjetas)
  - Neutral / Texto oscuro: `#1A1A1A` (Casi negro / Texto principal en modo claro)

 * Tipografía:
  - Headlines (h1, h2, h3, títulos de tarjetas): `Playfair Display`, serif.
  - Body (párrafos, nav, filtros, botones, inputs): `Plus Jakarta Sans`, sans-serif.

 * Capas de aplicación (del fondo al detalle):
  - Capa 0 (Lienzo): `#F4F1EA` en light / `#0D2C33` en dark.
  - Capa 1 (Superficies/Cards/Sidebar): `#FFFFFF` con borde sutil en light / `#123841` (versión elevada del primario) en dark.
  - Capa 2 (Textos): `#1A1A1A` en light / `#F4F1EA` en dark.
  - Capa 3 (Interacción y Acentos): 
    - Botones y CTAs: Fondo `#FF9D42` con texto `#1A1A1A` o blanco.
    - Badges y estrellas: Bordes/detalles en `#FF9D42`.
    - Favoritos (activo) y Cerrar sesión: `#E11D48` (rojo).