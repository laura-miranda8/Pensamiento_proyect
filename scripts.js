// Base de Datos de los 49 Conceptos Teóricos Solicitados
const conceptosData = [
    { c: "Coherencia Formal", d: "Integración armónica y lógica de las partes dentro de una unidad visual o tridimensional. Se subdivide en coherencia intraformal (relación armónica entre los elementos de una misma pieza mediante proporciones, tangencias y radios de empalme) y coherencia interformal (afinidad estructural entre varios objetos distintos pertenecientes a una misma colección o sistema).", svg: `<svg class="text-brand-magenta" viewBox="0 0 100 60"><rect x="10" y="10" width="30" height="40" fill="none" stroke="currentColor" stroke-width="3"/><rect x="45" y="10" width="45" height="40" fill="none" stroke="currentColor" stroke-width="3"/></svg>` },
    { c: "Módulos", d: "Formas unitarias o átomos compositivos idénticos o semejantes que se repiten en el plano o en el espacio. Su presencia simplifica el sistema de producción o diseño y aporta orden, unidad visual y armonía inmediata.", svg: `<svg class="text-brand-blueSky" viewBox="0 0 100 60"><polygon points="50,10 85,50 15,50" fill="none" stroke="currentColor" stroke-width="3"/></svg>` },
    { c: "Submódulos", d: "Elementos constitutivos más pequeños que componen internamente a un módulo. Aunque el módulo actúa como la unidad principal de repetición, los submódulos organizan la microestructura interna de este.", svg: `<svg class="text-brand-magenta" viewBox="0 0 100 60"><polygon points="50,10 85,50 15,50" fill="none" stroke="currentColor" stroke-width="2"/><polygon points="50,25 68,45 32,45" fill="currentColor"/></svg>` },
    { c: "Supermódulos", d: "Formas complejas resultantes de la agrupación ordenada de dos o más módulos. Una vez configurado, el supermódulo actúa como una nueva unidad compuesta que se repite a lo largo de una estructura. ", svg: `<svg class="text-brand-blueSky" viewBox="0 0 100 60"><circle cx="35" cy="30" r="15" fill="none" stroke="currentColor" stroke-width="3"/><circle cx="65" cy="30" r="15" fill="none" stroke="currentColor" stroke-width="3"/></svg>` },
    { c: "Retículas", d: "Matrices subyacentes o entramados de líneas equidistantes o proporcionales (horizontales, verticales, diagonales o curvas) que dividen el espacio en celdas. Gobiernan la ubicación, escala y posición de los módulos, garantizando la regularidad compositiva.", svg: `<svg class="text-brand-magenta" viewBox="0 0 100 60"><path d="M10,10 L90,10 M10,30 L90,30 M10,50 L90,50 M30,10 L30,50 M70,10 L70,50" stroke="currentColor" stroke-width="2"/></svg>` },
    { c: "Teselados", d: "Patrones o recubrimientos continuos de una superficie plana mediante la repetición de figuras geométricas que encajan a la perfección, sin dejar huecos o fisuras ni generar solapamientos entre las piezas.", svg: `<svg class="text-brand-blueSky" viewBox="0 0 100 60"><polygon points="30,10 70,10 90,30 70,50 30,50 10,30" fill="none" stroke="currentColor" stroke-width="3"/></svg>` },
    { c: "Grafos", d: "Estructuras abstractas de organización compuestas por vértices (nodos) y aristas (relaciones o conexiones de líneas). En diseño, sirven para sintetizar redes topológicas, mapas de interacción o esqueletos de fuerza.", svg: `<svg class="text-brand-magenta" viewBox="0 0 100 60"><circle cx="20" cy="20" r="4" fill="currentColor"/><circle cx="80" cy="20" r="4" fill="currentColor"/><circle cx="50" cy="45" r="4" fill="currentColor"/><line x1="20" y1="20" x2="80" y2="20" stroke="currentColor" stroke-width="2"/><line x1="20" y1="20" x2="50" y2="45" stroke="currentColor" stroke-width="2"/><line x1="80" y1="20" x2="50" y2="45" stroke="currentColor" stroke-width="2"/></svg>` },
    { c: "Mosaicos", d: "Composiciones decorativas o arquitectónicas formadas por el yuxtapuesto sistemático de pequeñas piezas modulares (teselas). Generan patrones cromáticos o figuras complejas sobre una superficie plana o tridimensional. ", svg: `<svg class="text-brand-blueSky" viewBox="0 0 100 60"><rect x="15" y="10" width="18" height="18" fill="currentColor"/><rect x="41" y="10" width="18" height="18" fill="currentColor"/><rect x="67" y="10" width="18" height="18" fill="currentColor"/><rect x="15" y="32" width="18" height="18" fill="currentColor"/><rect x="41" y="32" width="18" height="18" fill="currentColor"/><rect x="67" y="32" width="18" height="18" fill="currentColor"/></svg>` },
    { c: "Estructuras Naturales", d: "Patrones morfológicos organizados que se originan espontáneamente en sistemas biológicos o mineralógicos (cristalizaciones, nervaduras, panales). Responden a leyes de mínima energía, eficiencia estructural y crecimiento óptimo", svg: `<svg class="text-brand-magenta" viewBox="0 0 100 60"><path d="M50,5 L50,55 M50,20 L80,10 M50,35 L20,25 M50,45 L75,38" stroke="currentColor" stroke-width="3"/></svg>` },
    { c: "Redes", d: "Sistemas tridimensionales o bidimensionales interconectados de líneas y puntos distribuidos uniformemente. Transmiten cargas físicas o estructuran tensiones visuales a través de una composición.", svg: `<svg class="text-brand-blueSky" viewBox="0 0 100 60"><path d="M10,10 L50,30 L90,10 M10,50 L50,30 L90,50" stroke="currentColor" stroke-width="2" fill="none"/></svg>` },
    { c: "Diagramas de Voronoi", d: ": Particiones de un espacio euclidiano en regiones o celdas poligonales basadas en la distancia hacia un conjunto discreto de puntos generadores (semillas); cada celda abarca todos los puntos que están más cerca de su semilla que de cualquier otra.", svg: `<svg class="text-brand-magenta" viewBox="0 0 100 60"><path d="M20,10 L50,25 L20,50 Z M50,25 L80,10 L80,50 Z" fill="none" stroke="currentColor" stroke-width="2"/><circle cx="30" cy="25" r="3" fill="currentColor"/><circle cx="70" cy="30" r="3" fill="currentColor"/></svg>` },
    { c: "Fractalidad", d: "Propiedad de los objetos geométricos cuya estructura es fragmentada o aparentemente irregular, pero exhibe autosimilitud: sus partes, vistas a diferentes escalas o amplificaciones, replican exactamente la misma estructura que el todo", svg: `<svg class="text-brand-blueSky" viewBox="0 0 100 60"><polygon points="50,5 90,55 10,55" fill="none" stroke="currentColor" stroke-width="2"/><polygon points="50,55 30,30 70,30" fill="none" stroke="currentColor" stroke-width="2"/></svg>` },
    { c: "Principios Fundamentales del Diseño", d: "Bases conceptuales que rigen la síntesis visual y formal.", svg: `<svg class="text-brand-magenta" viewBox="0 0 100 60"><circle cx="30" cy="30" r="12" fill="currentColor"/><rect x="55" y="18" width="24" height="24" fill="currentColor"/></svg>` },
    { c: "Anomalía", d: "Presencia deliberada de una irregularidad, variación o desviación visual dentro de un patrón o estructura regular. Rompe la monotonía, capta el foco de atención y genera tensión o interés visual. ", svg: `<svg class="text-brand-blueSky" viewBox="0 0 100 60"><circle cx="20" cy="30" r="6" fill="currentColor"/><circle cx="40" cy="30" r="6" fill="currentColor"/><rect x="56" y="24" width="12" height="12" fill="currentColor"/><circle cx="80" cy="30" r="6" fill="currentColor"/></svg>` },
    { c: "Ley Gestalt", d: ": Teoría de la psicología perceptiva que establece que el cerebro procesa los estímulos visuales no como una suma de partes aisladas, sino mediante la organización activa en configuraciones globales, estables y estructuradas (el todo es más que la suma de sus partes).", svg: `<svg class="text-brand-magenta" viewBox="0 0 100 60"><path d="M20,15 A15,15 0 0,1 50,15 A15,15 0 0,1 80,15" fill="none" stroke="currentColor" stroke-width="3"/></svg>` },
    { c: "Ley de Cierre", d: "Tendencia del sistema visual a completar o cerrar perceptivamente los contornos discontinuos, huecos o formas incompletas, interpretándolos como figuras continuas y terminadas. ", svg: `<svg class="text-brand-blueSky" viewBox="0 0 100 60"><path d="M20,30 A15,15 0 1,1 50,45" fill="none" stroke="currentColor" stroke-width="3" stroke-dasharray="4"/></svg>` },
    { c: "Figura-Fondo", d: "Mecanismo básico de la percepción por el cual la mente separa el elemento focal con contorno definido y significación (figura) del espacio o plano envolvente e indeterminado que lo rodea (fondo). ", svg: `<svg class="text-brand-magenta" viewBox="0 0 100 60"><rect x="20" y="10" width="60" height="40" fill="currentColor"/><circle cx="50" cy="30" r="12" fill="#F0FFC7"/></svg>` },
    { c: "Repetición", d: "Uso sistemático y reiterado de una misma característica visual (figura, tamaño, color o textura) o módulo a través de una composición para unificar el diseño. ", svg: `<svg class="text-brand-blueSky" viewBox="0 0 100 60"><rect x="15" y="20" width="15" height="20" fill="currentColor"/><rect x="42" y="20" width="15" height="20" fill="currentColor"/><rect x="70" y="20" width="15" height="20" fill="currentColor"/></svg>` },
    { c: "Simetría", d: "Correspondencia exacta y equilibrada de forma, tamaño y posición de las partes de un objeto respecto a un plano, eje (axial) o punto central (radial). ", svg: `<svg class="text-brand-magenta" viewBox="0 0 100 60"><line x1="50" y1="5" x2="50" y2="55" stroke="currentColor" stroke-width="2" stroke-dasharray="3"/><polygon points="20,15 40,30 20,45" fill="currentColor"/><polygon points="80,15 60,30 80,45" fill="currentColor"/></svg>` },
    { c: "Asimetría", d: "Distribución desigual de elementos a ambos lados de un eje que, a pesar de carecer de correspondencia matemática, logra un equilibrio visual dinámico al sopesar visualmente formas, colores y contrastes.", svg: `<svg class="text-brand-blueSky" viewBox="0 0 100 60"><circle cx="25" cy="30" r="18" fill="currentColor"/><circle cx="70" cy="30" r="8" fill="currentColor"/></svg>` },
    { c: "Contraste", d: "Yuxtaposición de elementos con cualidades opuestas o marcadamente distintas (claro/oscuro, grande/pequeño, liso/rugoso) para enfatizar diferencias y establecer jerarquías", svg: `<svg class="text-brand-magenta" viewBox="0 0 100 60"><circle cx="30" cy="30" r="15" fill="currentColor"/><circle cx="70" cy="30" r="15" fill="none" stroke="currentColor" stroke-width="3"/></svg>` },
    { c: "Cesia", d: "Dimensión perceptiva del color que no depende del matiz o la saturación, sino de cómo la superficie trata la luz visible mediante grados de reflectancia, transparencia, traslucidez, brillo, opacidad y mate.", svg: `<svg class="text-brand-blueSky" viewBox="0 0 100 60"><circle cx="50" cy="30" r="20" fill="none" stroke="currentColor" stroke-width="3"/><path d="M35,30 Q50,10 65,30" fill="none" stroke="currentColor" stroke-width="2"/></svg>` },
    { c: "Ritmo", d: "Cadencia o flujo visual obtenido mediante la repetición, gradación o alternancia ordenada de elementos (módulos, líneas, vacíos) en el espacio. ", svg: `<svg class="text-brand-magenta" viewBox="0 0 100 60"><rect x="10" y="30" width="8" height="20" fill="currentColor"/><rect x="30" y="20" width="8" height="30" fill="currentColor"/><rect x="50" y="10" width="8" height="40" fill="currentColor"/><rect x="70" y="20" width="8" height="30" fill="currentColor"/></svg>` },
    { c: "Estructura", d: "Marco o disciplina organizativa subyacente que gobierna las posiciones relativas, orientaciones y espacios entre las formas de un diseño. ", svg: `<svg class="text-brand-blueSky" viewBox="0 0 100 60"><rect x="15" y="10" width="70" height="40" fill="none" stroke="currentColor" stroke-width="2"/><line x1="15" y1="10" x2="85" y2="50" stroke="currentColor" stroke-width="1.5"/></svg>` },
    { c: "Pregnancia", d: "Principio rector que sostiene que, ante múltiples interpretaciones posibles de un estímulo visual, la mente optará por la organización más simple, simétrica, regular, equilibrada y estable disponible. ", svg: `<svg class="text-brand-magenta" viewBox="0 0 100 60"><circle cx="50" cy="30" r="22" fill="none" stroke="currentColor" stroke-width="4"/></svg>` },
    { c: "Catamorfia", d: "Principio morfológico de Coherencia Formal mediante el cual un grupo de artefactos comparte un ADN geométrico o rasgos lingüísticos afines sin ser réplicas exactas; se perciben como pertenecientes a la misma familia morfológica.", svg: `<svg class="text-brand-blueSky" viewBox="0 0 100 60"><path d="M10,30 Q50,0 90,30 Q50,60 10,30 Z" fill="none" stroke="currentColor" stroke-width="3"/></svg>` },
    { c: "Euritmia", d: "Armonía, ritmo y proporción equilibrada en la combinación estética de las distintas partes que conforman una obra o artefacto. ", svg: `<svg class="text-brand-magenta" viewBox="0 0 100 60"><rect x="20" y="15" width="20" height="30" rx="10" fill="none" stroke="currentColor" stroke-width="3"/><rect x="50" y="10" width="30" height="40" rx="15" fill="none" stroke="currentColor" stroke-width="3"/></svg>` },
    { c: "Equilibrio", d: "Estado de estabilidad o contrapeso visual en una composición, conseguido asignando pesos visuales adecuados (por tamaño, color o densidad) para evitar la sensación de colapso o sesgo. ", svg: `<svg class="text-brand-blueSky" viewBox="0 0 100 60"><line x1="10" y1="45" x2="90" y2="45" stroke="currentColor" stroke-width="3"/><polygon points="50,25 60,45 40,45" fill="currentColor"/></svg>` },
    { c: "Semejanza", d: "Afinidad o parecido entre formas o módulos que no son exactamente idénticos, pero que conservan rasgos comunes en su figura o estructura básica. ", svg: `<svg class="text-brand-magenta" viewBox="0 0 100 60"><circle cx="25" cy="30" r="10" fill="currentColor"/><circle cx="50" cy="30" r="10" fill="currentColor"/><rect x="68" y="20" width="18" height="20" fill="currentColor"/></svg>` },
    { c: "Continuidad", d: ": Fluidez en la transición visual o espacial a lo largo de bordes y tangencias, garantizando que el paso entre líneas o volúmenes sea suave y carezca de quiebres abruptos. ", svg: `<svg class="text-brand-blueSky" viewBox="0 0 100 60"><path d="M10,40 Q50,10 90,40" fill="none" stroke="currentColor" stroke-width="3" stroke-dasharray="5"/></svg>` },
    { c: "Interfaz", d: "Zona o plano de interacción funcional, táctil y perceptiva entre el usuario y un artefacto, o entre las partes componentes de un sistema operativo o formal. ", svg: `<svg class="text-brand-magenta" viewBox="0 0 100 60"><rect x="15" y="10" width="70" height="40" rx="5" fill="none" stroke="currentColor" stroke-width="2"/><circle cx="50" cy="30" r="8" fill="currentColor"/></svg>` },
    { c: "Ley de Proximidad", d: "Principio perceptivo que establece que los elementos visuales que están físicamente más cercanos entre sí tienden a percibirse como una unidad o grupo coherente. ", svg: `<svg class="text-brand-blueSky" viewBox="0 0 100 60"><circle cx="20" cy="20" r="5" fill="currentColor"/><circle cx="32" cy="20" r="5" fill="currentColor"/><circle cx="75" cy="20" r="5" fill="currentColor"/><circle cx="87" cy="20" r="5" fill="currentColor"/></svg>` },
    { c: "Ley de Semejanza", d: "Tendencia a agrupar perceptivamente aquellos elementos aislados que comparten atributos visuales comunes, tales como forma, tamaño, color, textura o dirección. ", svg: `<svg class="text-brand-magenta" viewBox="0 0 100 60"><circle cx="20" cy="30" r="7" fill="currentColor"/><circle cx="40" cy="30" r="7" fill="currentColor"/><circle cx="60" cy="30" r="7" fill="currentColor"/></svg>` },
    { c: "Luces", d: "Zonas de alta reflectancia que revelan volumen.", svg: `<svg class="text-brand-blueSky" viewBox="0 0 100 60"><circle cx="50" cy="30" r="20" fill="currentColor"/><path d="M35,15 A15,15 0 0,1 55,15" fill="none" stroke="#fff" stroke-width="3"/></svg>` },
    { c: "Sombra", d: "Ausencia de luz que proyecta relief y profundidad.", svg: `<svg class="text-brand-magenta" viewBox="0 0 100 60"><ellipse cx="50" cy="45" rx="30" ry="8" fill="currentColor"/><circle cx="50" cy="25" r="15" fill="none" stroke="currentColor" stroke-width="2"/></svg>` },
    { c: "Textura", d: "Aspecto o cualidad táctil y visual de una superficie (rugosa, lisa, moleteada, suave) que afecta cómo la luz interactúa con ella y cómo la percibimos. ", svg: `<svg class="text-brand-blueSky" viewBox="0 0 100 60"><path d="M10,10 L90,10 M10,20 L90,20 M10,30 L90,30 M10,40 L90,40 M10,50 L90,50" stroke="currentColor" stroke-width="1" stroke-dasharray="2"/></svg>` },
    { c: "Iteración", d: "Proceso algorítmico o de repetición secuencial en el que se aplica una transformación de forma iterativa sobre una forma previa para generar patrones o volúmenes complejos. ", svg: `<svg class="text-brand-magenta" viewBox="0 0 100 60"><path d="M20,30 A15,15 0 1,1 50,45" fill="none" stroke="currentColor" stroke-width="3"/><polyline points="45,50 50,45 52,52" fill="currentColor"/></svg>` },
    { c: "Homeomorfia", d: "Propiedad geométrica y topológica mediante la cual una forma se puede deformar continuamente (mediante estiramiento o plegado) sin romperla ni unir sus partes, manteniendo intactas sus relaciones de vecindad. ", svg: `<svg class="text-brand-blueSky" viewBox="0 0 100 60"><circle cx="30" cy="30" r="15" fill="none" stroke="currentColor" stroke-width="2"/><path d="M60,15 C80,15 80,45 60,45 C50,45 50,15 60,15 Z" fill="none" stroke="currentColor" stroke-width="2"/></svg>` },
    { c: "Homotecia", d: "Transformación geométrica que amplía o reduce el tamaño de una figura de forma proporcional desde un punto fijo (centro de homotecia), manteniendo la forma intacta y sus ángulos coincidentes (invarianza de escala). ", svg: `<svg class="text-brand-magenta" viewBox="0 0 100 60"><polygon points="20,45 35,20 50,45" fill="none" stroke="currentColor" stroke-width="2"/><polygon points="20,45 60,5 80,45" fill="none" stroke="currentColor" stroke-width="2"/></svg>` },
    { c: "Principios de Interrelación Formal", d: "Modalidades espaciales en las que dos o más formas interactúan al aproximarse: distanciamiento, toque, superposición, penetración/intersección, unión, sustracción, coincidencia y transparencia. ", svg: `<svg class="text-brand-blueSky" viewBox="0 0 100 60"><circle cx="40" cy="30" r="15" fill="none" stroke="currentColor" stroke-width="2"/><circle cx="60" cy="30" r="15" fill="none" stroke="currentColor" stroke-width="2"/></svg>` },
    { c: "Abstracción", d: "Proceso de síntesis mental que extrae las cualidades formales esenciales y la estructura de un objeto, eliminando detalles accidentales, figurativos o secundarios. ", svg: `<svg class="text-brand-magenta" viewBox="0 0 100 60"><polygon points="50,10 80,50 20,50" fill="currentColor"/></svg>` },
    { c: "Simplificación", d: "Reducción de una forma compleja a sus elementos estructurales más básicos y legibles sin sacrificar su identificabilidad visual. ", svg: `<svg class="text-brand-blueSky" viewBox="0 0 100 60"><rect x="25" y="15" width="50" height="30" fill="none" stroke="currentColor" stroke-width="3"/></svg>` },
    { c: "Eideticidad", d: "Capacidad intuitiva de una forma de representar o evocar en la mente del espectador la esencia ideal, la imagen mental pura o el prototipo del concepto expresado.", svg: `<svg class="text-brand-magenta" viewBox="0 0 100 60"><circle cx="50" cy="30" r="18" fill="currentColor"/></svg>` },
    { c: "Representación", d: "Traducción visual mediante la cual un objeto, forma o idea se hace presente en un medio bidimensional o tridimensional mediante un equivalente figurativo o esquemático.", svg: `<svg class="text-brand-blueSky" viewBox="0 0 100 60"><path d="M30,45 C30,20 70,20 70,45 Z" fill="none" stroke="currentColor" stroke-width="3"/></svg>` },
    { c: "Símbolo", d: "Elemento visual o gráfico que representa una idea, valor o concepto abstracto en virtud de una convención social o acuerdo cultural, sin requerir semejanza física directa con lo que representa.", svg: `<svg class="text-brand-magenta" viewBox="0 0 100 60"><path d="M50,10 L50,50 M30,30 L70,30" stroke="currentColor" stroke-width="4"/></svg>` },
    { c: "Signo", d: "Entidad perceptiva mínima compuesta por un significante (la forma física/visual) y un significado (el concepto asociado), cuya función es comunicar un mensaje directo.", svg: `<svg class="text-brand-blueSky" viewBox="0 0 100 60"><polygon points="30,10 70,30 30,50" fill="currentColor"/></svg>` },
    { c: "Equilaridad", d: "Igualdad matemática o geométrica en las medidas de los lados o en los ángulos constitutivos de un módulo, red o polígono.", svg: `<svg class="text-brand-magenta" viewBox="0 0 100 60"><polygon points="50,10 85,48 15,48" fill="none" stroke="currentColor" stroke-width="3"/></svg>` },
    { c: "Singenomorfia", d: ": Coherencia de origen en la que distintas formas nacen a partir de la misma matriz o del mismo proceso generativo, compartiendo una genealogía morfológica común.", svg: `<svg class="text-brand-blueSky" viewBox="0 0 100 60"><path d="M20,20 Q50,40 80,20 M20,40 Q50,20 80,40" fill="none" stroke="currentColor" stroke-width="2"/></svg>` },
    { c: "Tracking", d: "Ajuste global y proporcional del espacio o separación existente entre todos los caracteres o letras de un bloque de texto o palabra.", svg: `<svg class="text-brand-magenta" viewBox="0 0 100 60"><text x="10" y="38" font-size="22" font-family="sans-serif" letter-spacing="8" fill="currentColor">A B C</text></svg>` },
    { c: "Kerning", d: "Ajustación o calibración individual del espacio óptico específico entre dos caracteres concretos para corregir vacíos visuales y lograr una lectura homogénea.", svg: `<svg class="text-brand-blueSky" viewBox="0 0 100 60"><text x="15" y="38" font-size="24" font-family="sans-serif" font-weight="bold" fill="currentColor">A V</text></svg>` }
];

// Base de Datos Completa de Artefactos
const artefactosData = {
    mod: [
        {
            t: "Sistema de Cultivo Hidropónico Vertical de Encaje Rotacional",
            a: "Configurado por la repetición vertical e interpenetración axial de módulos cilíndricos o cónicos. Cada nivel actúa como un submódulo de retención que rota sobre un eje central, variando su dirección para optimizar la captación de luz y el flujo hidráulico descendente."
        },
        {
            t: "Server Racks (Gabinete de Servidores)",
            a: "Basado en una modularidad dimensional rígida estandarizada (unidad de medida \"U\" = 1.75 pulgadas). El bastidor principal funciona como un marco reticular tridimensional activo en el que se deslizan e interconectan los chasis o módulos electrónicos mediante rieles guía."
        },
        {
            t: "Teclados Mecánicos Personalizables",
            a: "Estructurado en una retícula formal dividida en unidades proporcionales (1U, 1.25U, 2.25U). Se conforma por tres niveles modulares: el interruptor (switch), la cubierta (keycap) y la placa base, permitiendo la sustitución y personalización mediante ensamble directo por presión."
        },
        {
            t: "Electrodoméstico Empotrable / Horno Modular y Mueble de Cocina",
            a: "Basado en la modularidad dimensional rígida (estándar normado). El chasís del horno actúa como un módulo cúbico que encaja por contacto perimetral en la cavidad reticular de la cocina integral."
        },
        {
            t: "Lámparas Plegables (ej. Ori / Akari)",
            a: "Configuradas a partir de planos seriados o polígonos articulados por pliegues. La sumatoria de módulos planares interconectados por sus aristas permite la transformación volumétrica (despliegue/contracción), modificando el flujo y dispersión de la luz."
        },
        {
            t: "Sistemas de Estanterías Tipo String",
            a: "Sistema abierto compuesto por dos marcos laterales reticulares de alambre de acero (módulos portantes) y repisas/módulos de guardado. Se articulan por enganche directo, permitiendo una configuración variable en altura y ancho dentro del plano vertical."
        },
        {
            t: "USM Haller",
            a: "Sistema tridimensional icónico basado en un módulo nodal (conector esférico cromado), tubos de acero (módulos lineales) y paneles de chapa (planos continentes). Permite generar estructuras modulares de pared o muebles exentos de crecimiento ortogonal estricto."
        },
        {
            t: "Lámparas Modulares Tipo Nanoleaf",
            a: "Módulos planos poligonales (triangulares o hexagonales) que se ensamblan borde con borde mediante conectores eléctricos rígidos. Forman supermódulos lumínicos de teselado continuo sobre el plano bidimensional."
        },
        {
            t: "Mobiliario Modular de Oficina",
            a: "Conjunto de paneles acústicos, divisorias y cajoneras que actúan como módulos de acondicionamiento espacial. Se interrelacionan por unión angular y coincidencia de caras para delimitar microarquitecturas de trabajo dinámicas."
        },
        {
            t: "Calzado Deportivo Paramétrico / Suela de Impresión 3D",
            a: "Estructurado mediante una red reticular de células espaciales huecas (módulos tridimensionales). La variación de densidad del módulo le otorga amortiguación diferenciada según las zonas de presión del pie."
        }
    ],
    coh: [
        {
            t: "Diseño de Autos Porsche (ej. saga 911)",
            a: "Análisis (Isomorfía y Evolución Catamorfa): Coherencia formal intertemporal e intraformal sustentada en la continuidad de la silueta en gota (línea de techo descendente o flyline), faros ovoides integrados y guardabarros prominentes. Existe una invarianza del ADN visual a través de todas sus variantes."
        },
        {
            t: "Elementos de Cocina Alessi",
            a: "Análisis: Coherencia mediante la expresividad semántica, lúdica y la abstracción de formas orgánicas/escultóricas. El uso de volúmenes pulidos, transiciones curvas continúas y acentos plásticos genera una identidad de familia unificada en el espacio culinario."
        },
        {
            t: "Serie de Guitarras Silenciosas Yamaha (Silent Guitar)",
            a: "Análisis: Coherencia basada en el vaciado de masa y la síntesis de la silueta clásica. Reemplaza la caja de resonancia por un marco curvilíneo de madera/aluminio que réplica el contorno ergonómico del cuerpo de la guitarra tradicional mediante líneas de fluidez continua."
        },
        {
            t: "Bang & Olufsen (B&O)",
            a: "Análisis: Coherencia de lenguaje guiada por la monoliticidad, el minimalismo geométrico y la nobleza de materiales (aluminio anodizado cepillado, madera de roble, textil neutro). Los artefectos ocultan la complejidad técnica en favor de planos limpios y volúmenes puros."
        },
        {
            t: "Línea de Herramientas Festool",
            a: "Análisis: Coherencia formal basada en la jerarquía funcional de interfaz. La paleta cromática (verde/gris/negro), los mandos operativos destacados mediante acentos táctiles idénticos y el acople apilable de sus contenedores (Systainer) refuerzan la identidad de sistema industrial integrado."
        },
        {
            t: "Elementos Vitra",
            a: "Análisis: Coherencia formal sustentada en el respeto por la lógica del material y la economía gestual de la forma. La curvatura de los láminas de madera contrachapada, carcasas de polímero y estructuras tubulares mantiene una euritmia visual sobria e intemporal."
        },
        {
            t: "Braun (Diseño Clásico de Dieter Rams)",
            a: "Análisis: Coherencia sustentada en los principios del buen diseño (orden, neutralidad, geometría sobria y ausencia de ornamento). Uso riguroso de radios de curvatura pequeños, disposiciones ortogonales de elementos e interfaces operativas claras mediante botones cilíndricos o deslizantes."
        },
        {
            t: "Artefactos de los Hermanos Bouroullec (ej. Algues / Vegetal Chair)",
            a: "Análisis: Coherencia formal bio-inspirada centrada en la repetición de filamentos y ramificaciones orgánicas. Las transiciones suaves, el grosor variable tipo rama y la integración de vacíos crean un lenguaje visual liviano y de tejido vegetal."
        },
        {
            t: "Serie de Aviación Militar Sukhoi",
            a: "Análisis: Coherencia formal dominada por la aerodinámica funcional y la integración fuselaje-ala (Blended Wing Body). Las curvas de transición continua y los bordes de ataque afilados transmiten una semántica visual de agresividad, velocidad y estabilidad tectónica."
        },
        {
            t: "Silla Panton de Inyección (Verner Panton)",
            a: "Análisis: Coherencia formal monolítica por continuidad de superficie de voladizo único (cantilever). La transición fluida entre el respaldo, el asiento, el soporte en S y la base acampanada genera una pieza catamorfa continua sin juntas ni interrupciones."
        }
    ],
    est: [
        {
            t: "Estructura Molecular (Redes Cristalinas / Nodos Espaciales)",
            a: "Análisis: Retícula tridimensional regular gobernada por la disposición simétrica de átomos (nodos) y enlaces químicos (líneas estructurales). Genera poliedros y celdas unitarias repetitivas (cúbicas, hexagonales) que determinan las propiedades físicas de la materia."
        },
        {
            t: "Ojos Compuestos de Insectos",
            a: "Análisis: Retícula esférica de teselado regular compuesto por miles de omatidios hexagonales/lenticulares agrupados cara con cara. Maximiza el campo de visión y la captación de luz sobre una superficie curva."
        },
        {
            t: "Estructura del Caparazón de Erizo de Mar",
            a: "Análisis: Retícula abovedada cerrada constituida por la intersección y sutura de placas calcáreas pentagonales y hexagonales (mosaico esférico). Presenta un patrón de gradación geométrica de tamaño desde el polo apical hacia la base."
        },
        {
            t: "Células Epidérmicas de las Plantas",
            a: "Análisis: Retícula plana irregular tipo diagrama de Voronoi o pavimento biológico. Celdas poligonales de bordes sinuosos que encajan perfectamente para soportar la tensión mecánica de la superficie vegetal."
        },
        {
            t: "Nervadura de las Hojas",
            a: "Análisis: Retícula estructural jerárquica de carácter trófico/fractal. Una nervadura principal actúa como eje distribuidor del cual ramifican nervaduras secundarias y terciarias, formando una red poligonal de irrigación."
        },
        {
            t: "Cámara Interna de un Nautilus",
            a: "Análisis: Retícula radial y concéntrica regida por la espiral logarítmica (sección áurea / secuencia de Fibonacci). Los tabiques o septos internos actúan como módulos planares en gradación progresiva de tamaño que aportan resistencia estructural ante la presión hidrostática."
        },
        {
            t: "Fisuras en Lodo Seco por Desecación",
            a: "Análisis: Retícula geométrica de gráfico plano por retracción de material. Al perder humedad, las tensiones superficiales quiebran el terreno en nodos de tres vías formando teselas de cuadriláteros e hexágonos irregulares."
        },
        {
            t: "Cinadomorfia Bilateral (Simetría Bilateral Orgánica)",
            a: "Análisis: Estructura compositiva regida por un eje sagital central (línea de simetría axial). Organiza la repetición especular de módulos corporales (extremidades, órganos sensoriales) garantizando equilibrio dinámico y ergonómico."
        },
        {
            t: "Ala de Libélula",
            a: "Análisis: Retícula ligera de grafos y nervaduras venosas poligonales. Alterna celdas cuadradas y pentagonales de membrana transparente que combinan rigidez torsional y flexibilidad aerodinámica."
        }
    ]
};

// Renderizado Unificado de Artefactos
function renderArtefactos() {
    ['mod', 'coh', 'est'].forEach(cat => {
        const container = document.getElementById(`sub-${cat}`);
        if (!container) return;

        container.innerHTML = '';

        if (typeof artefactosData === 'undefined' || !artefactosData[cat]) return;

        container.innerHTML = artefactosData[cat].map((item, index) => {
            const imgNum = index + 1;
            const imgPath = `./${cat}_${imgNum}.jpg`;

            return `
                <div class="searchable-item artifact-parent" style="width: 100%;">
                    <div class="artifact-card" style="border: 3px solid #F034BF; border-radius: 20px; overflow: hidden; background: #ffffff; margin-bottom: 20px; box-shadow: 0 10px 20px rgba(0,0,0,0.1);">
                        
                        <!-- CONTENEDOR DE IMAGEN -->
                        <div style="width: 100%; height: 200px; background-color: #e2e8f0; overflow: hidden; position: relative;">
                            <img src="${imgPath}" 
                                 alt="${item.t}" 
                                 style="width: 100%; height: 100%; object-fit: cover; display: block;"
                                 onerror="this.onerror=null; this.src='https://picsum.photos/600/400?random=${cat}${imgNum}';">
                            <span style="position: absolute; top: 10px; right: 10px; background: #F034BF; color: white; font-size: 10px; font-weight: 800; padding: 4px 10px; border-radius: 12px;">
                                ITEM #${imgNum}
                            </span>
                        </div>

                        <!-- CONTENIDO -->
                        <div style="padding: 20px;">
                            <h4 style="font-size: 16px; font-weight: 800; color: #F034BF; margin-bottom: 8px;">${item.t}</h4>
                            <p style="font-size: 12px; color: #334155; line-height: 1.5; margin-bottom: 12px;">${item.a}</p>
                            <span style="font-size: 9px; font-weight: 800; text-transform: uppercase; color: #ffffff; background: #F034BF; padding: 4px 8px; border-radius: 8px;">
                                Análisis Térmico / Formal
                            </span>
                        </div>

                    </div>
                </div>
            `;
        }).join('');
    });
}

function renderGlosario() {
    const container = document.getElementById('glosarioContainer');
    if (!container) return;
    
    container.innerHTML = conceptosData.map((item, index) => {
        return `
            <div class="searchable-item card">
                <div class="card-content">
                    <div class="card-top">
                        <p class="card-title capitalize">${item.c}</p>
                        <p class="text-xs text-brand-magenta font-bold">#${index + 1}</p>
                    </div>
                    <div class="card-image">
                        ${item.svg}
                    </div>
                    <div class="card-bottom">
                        <p class="text-xs leading-relaxed opacity-90">${item.d}</p>
                    </div>
                </div>
            </div>
        `;
    }).join('');
}

function switchTab(tabId) {
    document.querySelectorAll('.tab-content').forEach(el => el.classList.add('hidden'));
    const targetTab = document.getElementById(`tab-${tabId}`);
    if (targetTab) targetTab.classList.remove('hidden');

    document.querySelectorAll('.pill-nav-btn').forEach(btn => {
        if (btn.getAttribute('data-tab') === tabId) {
            btn.classList.add('active');
        } else {
            btn.classList.remove('active');
        }
    });

    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function showSubCategory(cat) {
    document.querySelectorAll('.sub-category-content').forEach(el => el.classList.add('hidden'));
    const targetSub = document.getElementById(`sub-${cat}`);
    if (targetSub) targetSub.classList.remove('hidden');
}

function toggleDarkMode() {
    const input = document.getElementById('input');
    if (input && input.checked) {
        document.documentElement.classList.add('dark');
    } else {
        document.documentElement.classList.remove('dark');
    }
}

function searchGlobal() {
    const query = document.getElementById('globalSearch').value.toLowerCase().trim();
    const items = document.querySelectorAll('.searchable-item');

    items.forEach(item => {
        const text = item.textContent.toLowerCase();
        item.style.display = text.includes(query) ? "" : "none";
    });
}

function togglePixelCard(card) {
    const front = card.querySelector('.card-front');
    const back = card.querySelector('.card-back');

    if (front && back) {
        front.classList.toggle('hidden');
        back.classList.toggle('hidden');
    }
}

// Inicialización de la aplicación al cargar el DOM
document.addEventListener('DOMContentLoaded', () => {
    renderGlosario();
    renderArtefactos();
    
    // Inicialización de acordeón del campus
    const galleries = document.querySelectorAll('.accordion-gallery');
    galleries.forEach(gallery => {
        const panels = gallery.querySelectorAll('.ag-panel');
        panels.forEach(panel => {
            panel.addEventListener('mouseenter', () => {
                panels.forEach(p => p.classList.remove('ag-panel--active'));
                panel.classList.add('ag-panel--active');
            });
        });
    });
});

// Canvas de Fondo (Hero)
(function initPixelCanvas() {
    const canvas = document.getElementById('pixelCanvas');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');

    const img = new Image();
    img.src = './campus.jpeg';

    const pixelSize = 40;
    let pixels = [];
    let mouse = { x: -1000, y: -1000 };

    function resize() {
        const container = canvas.parentElement;
        if (!container || container.clientWidth === 0) return;
        canvas.width = container.clientWidth;
        canvas.height = container.clientHeight;
        createGrid();
    }

    function createGrid() {
        pixels = [];
        const cols = Math.ceil(canvas.width / pixelSize);
        const rows = Math.ceil(canvas.height / pixelSize);

        for (let r = 0; r < rows; r++) {
            for (let c = 0; c < cols; c++) {
                pixels.push({
                    x: c * pixelSize,
                    y: r * pixelSize,
                    scale: 1,
                    angle: 0,
                    targetScale: 1,
                    targetAngle: 0
                });
            }
        }
    }

    window.addEventListener('resize', resize);

    document.addEventListener('mousemove', (e) => {
        const rect = canvas.getBoundingClientRect();
        if (e.clientX >= rect.left && e.clientX <= rect.right &&
            e.clientY >= rect.top && e.clientY <= rect.bottom) {
            mouse.x = e.clientX - rect.left;
            mouse.y = e.clientY - rect.top;
        } else {
            mouse.x = -1000;
            mouse.y = -1000;
        }
    });

    img.onload = () => {
        resize();
        animate();
    };

    function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        pixels.forEach(p => {
            const dx = mouse.x - (p.x + pixelSize / 2);
            const dy = mouse.y - (p.y + pixelSize / 2);
            const dist = Math.hypot(dx, dy);

            if (dist < 120) {
                p.targetScale = 0.35;
                p.targetAngle = (120 - dist) * 0.8;
            } else {
                p.targetScale = 1;
                p.targetAngle = 0;
            }

            p.scale += (p.targetScale - p.scale) * 0.1;
            p.angle += (p.targetAngle - p.angle) * 0.1;

            ctx.save();
            ctx.translate(p.x + pixelSize / 2, p.y + pixelSize / 2);
            ctx.rotate((p.angle * Math.PI) / 180);
            ctx.scale(p.scale, p.scale);

            ctx.drawImage(
                img,
                (p.x / canvas.width) * img.width,
                (p.y / canvas.height) * img.height,
                (pixelSize / canvas.width) * img.width,
                (pixelSize / canvas.height) * img.height,
                -pixelSize / 2,
                -pixelSize / 2,
                pixelSize,
                pixelSize
            );

            ctx.restore();
        });

        requestAnimationFrame(animate);
    }
})();// --- CARRUSEL 3D PERSPECTIVA (TALLER DE RETÍCULAS) ---
(function initPerspectiveCarousel() {
    const stage = document.getElementById('tallerCarouselStage');
    if (!stage) return;

    const slides = Array.from(stage.querySelectorAll('.p-slide'));
    const prevBtn = document.getElementById('tallerPrevBtn');
    const nextBtn = document.getElementById('tallerNextBtn');
    const dotsContainer = document.getElementById('tallerDots');

    let activeIndex = 2; // Inicia centrado en la lámina C (igual que defaultActiveIndex={2})
    const total = slides.length;

    // Crear puntos indicadores
    if (dotsContainer) {
        dotsContainer.innerHTML = slides.map((_, idx) => `
            <button data-dot="${idx}" class="w-2.5 h-2.5 rounded-full transition-all duration-300 bg-slate-400 hover:bg-brand-magenta cursor-pointer"></button>
        `).join('');
    }

    function updateCarousel() {
        slides.forEach((slide, index) => {
            // Calcular distancia circular más corta respecto a activeIndex
            let offset = index - activeIndex;
            if (offset > total / 2) offset -= total;
            if (offset < -total / 2) offset += total;

            const absOffset = Math.abs(offset);
            const isVisible = absOffset <= 3;

            if (!isVisible) {
                slide.style.opacity = '0';
                slide.style.pointerEvents = 'none';
                slide.style.transform = `translateX(${offset * 160}px) translateZ(-400px) scale(0.5)`;
                slide.classList.remove('is-active');
                return;
            }

            // Parámetros de perspectiva 3D tipo PerspectiveCarousel
            const translateX = offset * 175;
            const translateZ = -absOffset * 110;
            const rotateY = offset * -22;
            const scale = offset === 0 ? 1.08 : Math.max(0.72, 1 - absOffset * 0.12);
            const opacity = offset === 0 ? 1 : Math.max(0.35, 1 - absOffset * 0.25);
            const zIndex = 20 - absOffset;

            slide.style.transform = `translateX(${translateX}px) translateZ(${translateZ}px) rotateY(${rotateY}deg) scale(${scale})`;
            slide.style.opacity = opacity;
            slide.style.zIndex = zIndex;
            slide.style.pointerEvents = 'auto';
            slide.style.filter = offset === 0 ? 'none' : `blur(${absOffset * 0.6}px)`;

            if (offset === 0) {
                slide.classList.add('is-active');
            } else {
                slide.classList.remove('is-active');
            }
        });

        // Actualizar puntos
        if (dotsContainer) {
            dotsContainer.querySelectorAll('button').forEach((dot, idx) => {
                if (idx === activeIndex) {
                    dot.classList.remove('bg-slate-400', 'w-2.5');
                    dot.classList.add('bg-brand-magenta', 'w-6');
                } else {
                    dot.classList.remove('bg-brand-magenta', 'w-6');
                    dot.classList.add('bg-slate-400', 'w-2.5');
                }
            });
        }
    }

    // Eventos de flechas
    if (prevBtn) {
        prevBtn.addEventListener('click', () => {
            activeIndex = (activeIndex - 1 + total) % total;
            updateCarousel();
        });
    }

    if (nextBtn) {
        nextBtn.addEventListener('click', () => {
            activeIndex = (activeIndex + 1) % total;
            updateCarousel();
        });
    }

    // Clic directo sobre cualquier tarjeta lateral para centrarla
    slides.forEach((slide, index) => {
        slide.addEventListener('click', () => {
            if (activeIndex !== index) {
                activeIndex = index;
                updateCarousel();
            }
        });
    });

    // Clic en los puntos
    if (dotsContainer) {
        dotsContainer.querySelectorAll('button').forEach(dot => {
            dot.addEventListener('click', () => {
                activeIndex = Number(dot.getAttribute('data-dot'));
                updateCarousel();
            });
        });
    }

    // Soporte táctil (deslizar en móvil)
    let touchStartX = 0;
    stage.addEventListener('touchstart', e => {
        touchStartX = e.changedTouches[0].screenX;
    }, { passive: true });

    stage.addEventListener('touchend', e => {
        const diff = touchStartX - e.changedTouches[0].screenX;
        if (Math.abs(diff) > 40) {
            activeIndex = diff > 0 ? (activeIndex + 1) % total : (activeIndex - 1 + total) % total;
            updateCarousel();
        }
    });

    updateCarousel();
})();// --- CARRUSEL CILÍNDRICO 3D (20 IMÁGENES) ---
// =========================================================================
// BASE DE DATOS DE IMÁGENES Y EXPLICACIONES (20 POR SECCIÓN)
// =========================================================================

// 1. SECCIÓN: CREANDO RETÍCULAS (Cambia img, t y d por tus 20 láminas)
const reticulasData = [
    { img: "./reticula_1.jpg",  t: "Retícula 01",      d: "Principios: Retícula inclinada (paralelogramo), repetición, anomalia cromática y encaje por toque. " },
    { img: "./reticula_2.jpg",  t: "Retícula 02",   d: "Principios: Estructura semiformal, equilibrio asimétrico, variación de escala y contraste cromático (ocre/verde)." },
    { img: "./reticula_3.jpg",  t: "Retícula 03",    d: "Principios: Retícula ortogonal de repetición, reflexión (simetría axial vertical), gradación de color y ritmo constante." },
    { img: "./reticula_4.jpg",  t: "Retícula 04",   d: "Principios: Retícula de radiación centrífuga en espiral, homotecia (gradación de escala) y gradación cromática." },
    { img: "./reticula_5.jpg",  t: "Retícula 05",     d: "Principios: Retícula radial concéntrica, simetría rotacional (8 ejes), gradación escalar y ritmo expansivo." },
    { img: "./reticula_6.jpg",  t: "Retícula 06",       d: "Principios: Retícula básica ortogonal (4 x 4), repetición estricta y variación cromática en diagonal." },
    { img: "./reticula_7.jpg",  t: "Retícula 07 ",        d: "Principios: Retícula modular ortogonal, anomalía de posición (rotación) y contraste cromático." },
    { img: "./reticula_8.jpg",  t: "Retícula 08",   d: "Principios: Retícula activa visible, teselado complejo, ritmo alternado y anomalía cromática (rojo)." },
    { img: "./reticula_9.jpg",  t: "Retícula 09 ",         d: "Principios: Retícula jerárquica por subdivisión (cuadrícula escalar), rotación a 45° y ritmo progresivo." },
    { img: "./reticula_10.jpg", t: "Retícula 10 ",  d: "Principios: Retícula básica ortogonal (5 x 9), repetición pura, ritmo simple y contraste figura-fondo. " },
    { img: "./reticula_11.jpg", t: "Retícula 11 ",      d: "Principios: Teselado / encaje modular, ritmo alternado de color (cian/rojo) y simetría de traslación." },
    { img: "./reticula_12.jpg", t: "Retícula 12", d: "Principios: Retícula deslizada (desplazamiento de filas), gradación de color y forma, y ritmo direccional.." },
    { img: "./reticula_13.jpg", t: "Retícula 13",   d: "Principios: Radiación completa, rotación constante, superposición lineal y monocromía." },
    { img: "./reticula_14.jpg", t: "Retícula 14 ",      d: "Principios: Retícula ortogonal en cuadrantes, repetición isométrica y superposición en un cuadrante" },
    { img: "./reticula_15.jpg", t: "Retícula 15",      d: "Principios: Retícula ortogonal con sustracción/desplazamiento diagonal, repetición y textura bicromática." },
    { img: "./reticula_16.jpg", t: "Retícula 16 ",   d: "Principios: Retícula básica (3 x 3), radiación interna en cada módulo y contraste de complementarios (violeta/amarillo). " },
    { img: "./reticula_17.jpg", t: "Retícula 17",   d: "Principios: Retícula modular de supermódulos (3 x 2), simetría axial y anomalía cromática (gris sobre rojo). " },
    { img: "./reticula_18.jpg", t: "Retícula 18",     d: "Principios: Teselado de doble módulo (encaje positivo-negativo), ritmo alternado (naranja/rojo) y equilibrio asimétrico." },
    { img: "./reticula_19.jpg", t: "Retícula 19 ",     d: "Principios: Agrupamiento en supermódulos (3 x 3), rotación interna y contraste de detalle. " },
    { img: "./reticula_20.jpg", t: "Retícula 20 ",    d: "Principios: Radiación completa (8 módulos), continuidad circular y contraste figura-fondo.." }
];

// 2. SECCIÓN: CREANDO COMPOSICIONES (Cambia img, t y d por tus 20 composiciones)
const composicionesData = [
    { img: "./composicion_1.jpg",  t: "Composición 01 ", d: "Principios: Concentración, ritmo irregular, contraste cromático (cálidos vs. fríos) y rotación. " },
    { img: "./composicion_2.jpg",  t: "Composición 02 ",        d: "epetición, gradación de color y posición, simetría axial y superposición (solape).." },
    { img: "./composicion_3.jpg",  t: "Composición 03 ",         d: "Ritmo alternado, continuidad, contraste figura-fondo y semejanza." },
    { img: "./composicion_4.jpg",  t: "Composición 04 ",      d: "Gradación de tamaño y tono, ritmo direccional (diagonal), textura visual y repetición." },
    { img: "./composicion_5.jpg",  t: "Composición 05 ",  d: "Principios: Isometría, repetición modular, continuidad y contraste tonal (luces y sombras)" },
    { img: "./composicion_6.jpg",  t: "Composición 06",   d: "Principios: Radiación, simetría rotacional, superposición y armonía cromática análoga" },
    { img: "./composicion_7.jpg",  t: "Composición 07 ",   d: "Principios: Repetición, ritmo alternado, simetría axial y textura lineal." },
    { img: "./composicion_8.jpg",  t: "Composición 08 ",   d: "Principios: Repetición, simetría especular (reflexión), anomalía y ritmo constante" },
    { img: "./composicion_9.jpg",  t: "Composición 09 ",     d: "Principios: Simetría cuádruple (axial vertical y horizontal), gradación de color (amarillo a púrpura oscuro) y expansión radial" },
    { img: "./composicion_10.jpg", t: "Composición 10 ",d: "Principios: Simetría cuádruple (axial vertical y horizontal), gradación de color (amarillo a púrpura oscuro) y expansión radial" },
    { img: "./composicion_11.jpg", t: "Composición 11 ",     d: "Principios: Repetición, gradación de tamaño y valor, contraste de complementarios (amarillo/violeta y verde/magenta)" },
    { img: "./composicion_12.jpg", t: "Composición 12 ",      d: "Principios: Ritmo alternado horizontal, contraste máximo (negro, azul marino y cian sobre blanco) y superposición." },
    { img: "./composicion_13.jpg", t: "Composición 13 ",  d: "Principios: Radiación completa, escala jerárquica (homotecia), simetría rotacional y monocromía." },
    { img: "./composicion_14.jpg", t: "Composición 14 ",       d: "Principios: Repetición, superposición, gradación tonal y contraste de temperatura (fríos vs. verde bosque)." },
    { img: "./composicion_15.jpg", t: "Composición 15 ", d: "Principios: Radiación concéntrica, simetría bilateral, contraste figura-fondo y jerarquía por color." },
    { img: "./composicion_16.jpg", t: "Composición 16 ",       d: "Principios: Iteración, gradación cromática (violeta a magenta), continuidad y transparencia visual" },
    { img: "./composicion_17.jpg", t: "Composición 17 ", d: "Principios: Redundancia, concentración, contraste de complementarios (amarillo/púrpura) y gradación de escala." },
    { img: "./composicion_18.jpg", t: "Composición 18 ",      d: "Principios: Reflexión (simetría axial vertical), ritmo ondulante, repetición y monocromía." },
    { img: "./composicion_19.jpg", t: "Composición 19 ",    d: "Principios: Gradación de posición (extrusión), contraste de complementarios (amarillo/violeta) y superposición." },
    { img: "./composicion_20.jpg", t: "Composición 20 ",     d: "Principios: Contraste máximo (blanco/negro), equilibrio asimétrico, rotación y continuidad diagonal." }
];

// =========================================================================
// MOTOR DEL CARRUSEL CILÍNDRICO INTERACTIVO CON DETENCIÓN Y TEXTO EXPLICATIVO
// =========================================================================
function initInteractiveCylinder(containerId, infoBoxId, dataList, labelPrefix) {
    const wrapper = document.getElementById(containerId);
    const infoBox = document.getElementById(infoBoxId);
    if (!wrapper || !infoBox || !dataList.length) return;

    const ring = wrapper.querySelector('.cylinder-ring');
    const prevBtn = wrapper.querySelector('.cyl-prev');
    const nextBtn = wrapper.querySelector('.cyl-next');

    const badgeEl = infoBox.querySelector('.cyl-info-badge');
    const titleEl = infoBox.querySelector('.cyl-info-title');
    const descEl  = infoBox.querySelector('.cyl-info-desc');

    const count = dataList.length;
    const angleStep = 360 / count;
    const radius = Math.round((195 / 2) / Math.tan(Math.PI / count)) + 25;

    // Construir las 20 tarjetas
    ring.innerHTML = dataList.map((item, idx) => {
        const angle = idx * angleStep;
        return `
            <div class="cylinder-item" data-idx="${idx}" style="transform: rotateY(${angle}deg) translateZ(${radius}px);">
                <img src="${item.img}" 
                     alt="${item.t}" 
                     onerror="this.onerror=null; this.src='https://picsum.photos/280/380?random=${labelPrefix}${idx + 1}';">
                <span class="cylinder-badge">#${idx + 1}</span>
            </div>
        `;
    }).join('');

    const items = Array.from(ring.querySelectorAll('.cylinder-item'));

    let currentRotation = 0;
    let targetRotation = 0;
    let isAutoRotating = true;
    let isDragging = false;
    let startX = 0;
    let activeIndex = 0;

    // Actualizar la caja de texto inferior y marcar la tarjeta activa
    function updateInfoBox(index) {
        if (activeIndex === index && items[index].classList.contains('is-selected')) return;
        activeIndex = index;

        items.forEach((el, i) => {
            el.classList.toggle('is-selected', i === index);
        });

        const currentData = dataList[index];
        if (badgeEl) badgeEl.textContent = `${labelPrefix} #${index + 1}`;
        if (titleEl) titleEl.textContent = currentData.t;
        if (descEl)  descEl.textContent  = currentData.d;
    }

    // Centrar una tarjeta específica al frente
    function focusItem(index) {
        isAutoRotating = false; // Detiene el giro automático para que puedas leer
        const desiredAngle = -index * angleStep;
        // Encontrar el camino angular más corto
        const diff = ((desiredAngle - currentRotation + 540) % 360) - 180;
        targetRotation = currentRotation + diff;
        updateInfoBox(index);
    }

    // Calcular qué tarjeta está exactamente mirando al frente según el ángulo actual
    function syncFrontItem() {
        const normalized = ((-currentRotation % 360) + 360) % 360;
        const frontIdx = Math.round(normalized / angleStep) % count;
        updateInfoBox(frontIdx);
    }

    function animate() {
        if (isAutoRotating && !isDragging) {
            targetRotation -= 0.12;
        }
        // Suavizado de movimiento (lerp)
        currentRotation += (targetRotation - currentRotation) * 0.12;
        ring.style.transform = `translateZ(-120px) rotateY(${currentRotation}deg)`;

        syncFrontItem();
        requestAnimationFrame(animate);
    }

    // Clic directo sobre una tarjeta para detener el carrusel y ver su explicación
    items.forEach((item, idx) => {
        item.addEventListener('click', (e) => {
            if (Math.abs(e.clientX - startX) > 6) return; // Ignorar si estaba arrastrando
            focusItem(idx);
        });
    });

    // Botones Anterior / Siguiente
    if (prevBtn) {
        prevBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            const prevIdx = (activeIndex - 1 + count) % count;
            focusItem(prevIdx);
        });
    }

    if (nextBtn) {
        nextBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            const nextIdx = (activeIndex + 1) % count;
            focusItem(nextIdx);
        });
    }

    // Pausar cuando pasas el cursor por encima para leer tranquilo
    wrapper.addEventListener('mouseenter', () => {
        isAutoRotating = false;
    });

    // Arrastre con mouse
    wrapper.addEventListener('mousedown', (e) => {
        isDragging = true;
        isAutoRotating = false;
        startX = e.clientX;
    });

    window.addEventListener('mousemove', (e) => {
        if (!isDragging) return;
        const deltaX = e.clientX - startX;
        startX = e.clientX;
        targetRotation += deltaX * 0.35;
        currentRotation = targetRotation;
    });

    window.addEventListener('mouseup', () => {
        isDragging = false;
    });

    // Arrastre táctil
    wrapper.addEventListener('touchstart', (e) => {
        isDragging = true;
        isAutoRotating = false;
        startX = e.touches[0].clientX;
    }, { passive: true });

    wrapper.addEventListener('touchmove', (e) => {
        if (!isDragging) return;
        const deltaX = e.touches[0].clientX - startX;
        startX = e.touches[0].clientX;
        targetRotation += deltaX * 0.35;
        currentRotation = targetRotation;
    }, { passive: true });

    wrapper.addEventListener('touchend', () => {
        isDragging = false;
    });

    updateInfoBox(0);
    animate();
}

// Inicializar ambos carruseles
document.addEventListener('DOMContentLoaded', () => {
    initInteractiveCylinder('cylinder-reticulas', 'info-reticulas', reticulasData, 'Retícula');
    initInteractiveCylinder('cylinder-composiciones', 'info-composiciones', composicionesData, 'Composición');
});

// Inicializar los dos cilindros del Apartado 6 (20 imágenes cada uno)
document.addEventListener('DOMContentLoaded', () => {
    createCylinderCarousel('cylinder-reticulas', 'reticula', 20);
    createCylinderCarousel('cylinder-composiciones', 'composicion', 20);
});function showBocetoSubCategory(sub) {
    document.querySelectorAll('.boceto-sub-content').forEach(el => el.classList.add('hidden'));
    const target = document.getElementById(`boceto-sub-${sub}`);
    if (target) target.classList.remove('hidden');
}// =========================================================================
// BASE DE DATOS: CATEGORÍA SEMÁNTICA (10 IMÁGENES)
// =========================================================================
const semanticaData = [
    { img: "./semantica_1.jpg",  t: "01. objeto estético ",        d: "Helicóptero para jugar" },
    { img: "./semantica_2.jpg",  t: "02. Objeto funcional",     d: "Canasta o organizador simple" },
    { img: "./semantica_3.jpg",  t: "03. objeto estético ",     d: "Soldado para jugar" },
    { img: "./semantica_4.jpg",  t: "04. objeto estético ",   d: "Cruz decorativa" },
    { img: "./semantica_5.jpg",  t: "05. Objeto funcional",      d: "Soporte horizontal para celulares " },
    { img: "./semantica_6.jpg",  t: "06. objeto estético ",   d: "Casa o arco de entrada para jugar" },
    { img: "./semantica_7.jpg",  t: "07. objeto estético",   d: "Figura castillo decorativa o para jugar" },
    { img: "./semantica_8.jpg",  t: "08. objeto estético",  d: "Persona para jugar" },
    { img: "./semantica_9.jpg",  t: "09. objeto estético",     d: "Gusano para jugar" },
    { img: "./semantica_10.jpg", t: "10. objeto funcional", d: "Martillo pequeño" }
];

// =========================================================================
// MOTOR DEL CARRUSEL DIAGONAL (DIAGONAL CAROUSEL - 10 ÍTEMS)
// =========================================================================
(function initDiagonalCarousel() {
    const wrapper = document.getElementById('semanticaDiagonalCarousel');
    const infoBox = document.getElementById('info-semantica');
    if (!wrapper || !semanticaData.length) return;

    const stage = wrapper.querySelector('.diagonal-stage');
    const prevBtn = document.getElementById('diagPrevBtn');
    const nextBtn = document.getElementById('diagNextBtn');
    const counterEl = document.getElementById('diagCounter');

    const badgeEl = infoBox ? infoBox.querySelector('.diag-info-badge') : null;
    const titleEl = infoBox ? infoBox.querySelector('.diag-info-title') : null;
    const descEl  = infoBox ? infoBox.querySelector('.diag-info-desc') : null;

    const total = semanticaData.length;
    let activeIndex = 2; // Inicia en la imagen #3 (igual que defaultActiveIndex={2})

    // Crear las 10 tarjetas
    stage.innerHTML = semanticaData.map((item, idx) => `
        <div class="diag-slide" data-idx="${idx}">
            <img src="${item.img}" 
                 alt="${item.t}" 
                 onerror="this.onerror=null; this.src='https://picsum.photos/300/300?random=semantica${idx + 1}';">
            <div class="diag-slide-overlay">
                <span class="diag-num">#${idx + 1}</span>
                <p>${item.t}</p>
            </div>
        </div>
    `).join('');

    const slides = Array.from(stage.querySelectorAll('.diag-slide'));

    function updateDiagonal() {
        slides.forEach((slide, idx) => {
            // Distancia circular respecto al índice activo
            let offset = idx - activeIndex;
            if (offset > total / 2) offset -= total;
            if (offset < -total / 2) offset += total;

            const absOffset = Math.abs(offset);

            if (absOffset > 3) {
                slide.style.opacity = '0';
                slide.style.pointerEvents = 'none';
                slide.style.transform = `translate(${offset * 190}px, ${offset * 115}px) scale(0.5)`;
                slide.classList.remove('is-active');
                return;
            }

            // Desplazamiento diagonal (X e Y proporcionales) + escala progresiva
            const translateX = offset * 175;
            const translateY = offset * 105;
            const scale = offset === 0 ? 1.15 : Math.max(0.65, 1 - absOffset * 0.14);
            const opacity = offset === 0 ? 1 : Math.max(0.3, 1 - absOffset * 0.25);
            const zIndex = 20 - absOffset;

            slide.style.transform = `translate(${translateX}px, ${translateY}px) scale(${scale})`;
            slide.style.opacity = opacity;
            slide.style.zIndex = zIndex;
            slide.style.pointerEvents = 'auto';
            slide.style.filter = offset === 0 ? 'none' : `grayscale(${absOffset * 20}%)`;

            slide.classList.toggle('is-active', offset === 0);
        });

        // Actualizar contador y caja de explicación inferior
        if (counterEl) counterEl.textContent = `${activeIndex + 1} / ${total}`;

        const current = semanticaData[activeIndex];
        if (badgeEl) badgeEl.textContent = `Atributo Semántico #${activeIndex + 1}`;
        if (titleEl) titleEl.textContent = current.t;
        if (descEl)  descEl.textContent  = current.d;
    }

    if (prevBtn) {
        prevBtn.addEventListener('click', () => {
            activeIndex = (activeIndex - 1 + total) % total;
            updateDiagonal();
        });
    }

    if (nextBtn) {
        nextBtn.addEventListener('click', () => {
            activeIndex = (activeIndex + 1) % total;
            updateDiagonal();
        });
    }

    slides.forEach((slide, idx) => {
        slide.addEventListener('click', () => {
            if (activeIndex !== idx) {
                activeIndex = idx;
                updateDiagonal();
            }
        });
    });

    // Soporte táctil
    let touchStartX = 0;
    wrapper.addEventListener('touchstart', e => {
        touchStartX = e.changedTouches[0].screenX;
    }, { passive: true });

    wrapper.addEventListener('touchend', e => {
        const diff = touchStartX - e.changedTouches[0].screenX;
        if (Math.abs(diff) > 40) {
            activeIndex = diff > 0 ? (activeIndex + 1) % total : (activeIndex - 1 + total) % total;
            updateDiagonal();
        }
    });

    updateDiagonal();
})();s