// Base de Datos de los 49 Conceptos Teóricos Solicitados
const conceptosData = [
    { c: "Coherencia Formal", d: "Integración armoniosa de las partes con el todo en un artefacto.", svg: `<svg class="text-brand-magenta" viewBox="0 0 100 60"><rect x="10" y="10" width="30" height="40" fill="none" stroke="currentColor" stroke-width="3"/><rect x="45" y="10" width="45" height="40" fill="none" stroke="currentColor" stroke-width="3"/></svg>` },
    { c: "Módulos", d: "Unidad formal que se repite para estructurar una composición.", svg: `<svg class="text-brand-blueSky" viewBox="0 0 100 60"><polygon points="50,10 85,50 15,50" fill="none" stroke="currentColor" stroke-width="3"/></svg>` },
    { c: "Submódulos", d: "Unidades menores que componen un módulo individual.", svg: `<svg class="text-brand-magenta" viewBox="0 0 100 60"><polygon points="50,10 85,50 15,50" fill="none" stroke="currentColor" stroke-width="2"/><polygon points="50,25 68,45 32,45" fill="currentColor"/></svg>` },
    { c: "Supermódulos", d: "Agrupación de varios módulos que actúan como una unidad mayor.", svg: `<svg class="text-brand-blueSky" viewBox="0 0 100 60"><circle cx="35" cy="30" r="15" fill="none" stroke="currentColor" stroke-width="3"/><circle cx="65" cy="30" r="15" fill="none" stroke="currentColor" stroke-width="3"/></svg>` },
    { c: "Retículas", d: "Malla estructural de líneas que gobierna la posición espacial.", svg: `<svg class="text-brand-magenta" viewBox="0 0 100 60"><path d="M10,10 L90,10 M10,30 L90,30 M10,50 L90,50 M30,10 L30,50 M70,10 L70,50" stroke="currentColor" stroke-width="2"/></svg>` },
    { c: "Teselados", d: "Cubrimiento plano sin huecos ni solapamientos.", svg: `<svg class="text-brand-blueSky" viewBox="0 0 100 60"><polygon points="30,10 70,10 90,30 70,50 30,50 10,30" fill="none" stroke="currentColor" stroke-width="3"/></svg>` },
    { c: "Grafos", d: "Redes compuestas por nodos y líneas interconectadas.", svg: `<svg class="text-brand-magenta" viewBox="0 0 100 60"><circle cx="20" cy="20" r="4" fill="currentColor"/><circle cx="80" cy="20" r="4" fill="currentColor"/><circle cx="50" cy="45" r="4" fill="currentColor"/><line x1="20" y1="20" x2="80" y2="20" stroke="currentColor" stroke-width="2"/><line x1="20" y1="20" x2="50" y2="45" stroke="currentColor" stroke-width="2"/><line x1="80" y1="20" x2="50" y2="45" stroke="currentColor" stroke-width="2"/></svg>` },
    { c: "Mosaicos", d: "Patrón de superficie formado por piezas pequeñas agrupadas.", svg: `<svg class="text-brand-blueSky" viewBox="0 0 100 60"><rect x="15" y="10" width="18" height="18" fill="currentColor"/><rect x="41" y="10" width="18" height="18" fill="currentColor"/><rect x="67" y="10" width="18" height="18" fill="currentColor"/><rect x="15" y="32" width="18" height="18" fill="currentColor"/><rect x="41" y="32" width="18" height="18" fill="currentColor"/><rect x="67" y="32" width="18" height="18" fill="currentColor"/></svg>` },
    { c: "Estructuras Naturales", d: "Sistemas biológicos autoregulados de alta eficiencia.", svg: `<svg class="text-brand-magenta" viewBox="0 0 100 60"><path d="M50,5 L50,55 M50,20 L80,10 M50,35 L20,25 M50,45 L75,38" stroke="currentColor" stroke-width="3"/></svg>` },
    { c: "Redes", d: "Entramados de distribución de carga o información.", svg: `<svg class="text-brand-blueSky" viewBox="0 0 100 60"><path d="M10,10 L50,30 L90,10 M10,50 L50,30 L90,50" stroke="currentColor" stroke-width="2" fill="none"/></svg>` },
    { c: "Diagramas de Voronoi", d: "Celdas poligonales basadas en la proximidad a puntos semilla.", svg: `<svg class="text-brand-magenta" viewBox="0 0 100 60"><path d="M20,10 L50,25 L20,50 Z M50,25 L80,10 L80,50 Z" fill="none" stroke="currentColor" stroke-width="2"/><circle cx="30" cy="25" r="3" fill="currentColor"/><circle cx="70" cy="30" r="3" fill="currentColor"/></svg>` },
    { c: "Fractalidad", d: "Autosimilitud formal repetida a distintas escalas.", svg: `<svg class="text-brand-blueSky" viewBox="0 0 100 60"><polygon points="50,5 90,55 10,55" fill="none" stroke="currentColor" stroke-width="2"/><polygon points="50,55 30,30 70,30" fill="none" stroke="currentColor" stroke-width="2"/></svg>` },
    { c: "Principios Fundamentales del Diseño", d: "Bases conceptuales que rigen la síntesis visual y formal.", svg: `<svg class="text-brand-magenta" viewBox="0 0 100 60"><circle cx="30" cy="30" r="12" fill="currentColor"/><rect x="55" y="18" width="24" height="24" fill="currentColor"/></svg>` },
    { c: "Anomalía", d: "Irregularidad deliberada dentro de un patrón regular.", svg: `<svg class="text-brand-blueSky" viewBox="0 0 100 60"><circle cx="20" cy="30" r="6" fill="currentColor"/><circle cx="40" cy="30" r="6" fill="currentColor"/><rect x="56" y="24" width="12" height="12" fill="currentColor"/><circle cx="80" cy="30" r="6" fill="currentColor"/></svg>` },
    { c: "Ley Gestalt", d: "Leyes perceptivas de organización de la forma.", svg: `<svg class="text-brand-magenta" viewBox="0 0 100 60"><path d="M20,15 A15,15 0 0,1 50,15 A15,15 0 0,1 80,15" fill="none" stroke="currentColor" stroke-width="3"/></svg>` },
    { c: "Ley de Cierre", d: "Tendencia del ojo a completar formas incompletas.", svg: `<svg class="text-brand-blueSky" viewBox="0 0 100 60"><path d="M20,30 A15,15 0 1,1 50,45" fill="none" stroke="currentColor" stroke-width="3" stroke-dasharray="4"/></svg>` },
    { c: "Figura-Fondo", d: "Contraste perceptivo entre el objeto principal y el fondo.", svg: `<svg class="text-brand-magenta" viewBox="0 0 100 60"><rect x="20" y="10" width="60" height="40" fill="currentColor"/><circle cx="50" cy="30" r="12" fill="#F0FFC7"/></svg>` },
    { c: "Repetición", d: "Uso iterativo del mismo elemento en el espacio.", svg: `<svg class="text-brand-blueSky" viewBox="0 0 100 60"><rect x="15" y="20" width="15" height="20" fill="currentColor"/><rect x="42" y="20" width="15" height="20" fill="currentColor"/><rect x="70" y="20" width="15" height="20" fill="currentColor"/></svg>` },
    { c: "Simetría", d: "Correspondencia especular respecto a un eje central.", svg: `<svg class="text-brand-magenta" viewBox="0 0 100 60"><line x1="50" y1="5" x2="50" y2="55" stroke="currentColor" stroke-width="2" stroke-dasharray="3"/><polygon points="20,15 40,30 20,45" fill="currentColor"/><polygon points="80,15 60,30 80,45" fill="currentColor"/></svg>` },
    { c: "Asimetría", d: "Equilibrio dinámico sin correspondencia exacta.", svg: `<svg class="text-brand-blueSky" viewBox="0 0 100 60"><circle cx="25" cy="30" r="18" fill="currentColor"/><circle cx="70" cy="30" r="8" fill="currentColor"/></svg>` },
    { c: "Contraste", d: "Diferenciación marcada entre elementos opuestos.", svg: `<svg class="text-brand-magenta" viewBox="0 0 100 60"><circle cx="30" cy="30" r="15" fill="currentColor"/><circle cx="70" cy="30" r="15" fill="none" stroke="currentColor" stroke-width="3"/></svg>` },
    { c: "Cesia", d: "Percepción de refracción, brillo, opacidad y transparencia.", svg: `<svg class="text-brand-blueSky" viewBox="0 0 100 60"><circle cx="50" cy="30" r="20" fill="none" stroke="currentColor" stroke-width="3"/><path d="M35,30 Q50,10 65,30" fill="none" stroke="currentColor" stroke-width="2"/></svg>` },
    { c: "Ritmo", d: "Secuencia cadenciada de elementos e intervalos.", svg: `<svg class="text-brand-magenta" viewBox="0 0 100 60"><rect x="10" y="30" width="8" height="20" fill="currentColor"/><rect x="30" y="20" width="8" height="30" fill="currentColor"/><rect x="50" y="10" width="8" height="40" fill="currentColor"/><rect x="70" y="20" width="8" height="30" fill="currentColor"/></svg>` },
    { c: "Estructura", d: "Marco disciplinador subyacente de la composición.", svg: `<svg class="text-brand-blueSky" viewBox="0 0 100 60"><rect x="15" y="10" width="70" height="40" fill="none" stroke="currentColor" stroke-width="2"/><line x1="15" y1="10" x2="85" y2="50" stroke="currentColor" stroke-width="1.5"/></svg>` },
    { c: "Pregnancia", d: "Fuerza visual de una forma clara y memorable.", svg: `<svg class="text-brand-magenta" viewBox="0 0 100 60"><circle cx="50" cy="30" r="22" fill="none" stroke="currentColor" stroke-width="4"/></svg>` },
    { c: "Catamorfia", d: "Síntesis formal derivada de un mismo principio matriz.", svg: `<svg class="text-brand-blueSky" viewBox="0 0 100 60"><path d="M10,30 Q50,0 90,30 Q50,60 10,30 Z" fill="none" stroke="currentColor" stroke-width="3"/></svg>` },
    { c: "Euritmia", d: "Armonía proporcionada entre las partes y el todo.", svg: `<svg class="text-brand-magenta" viewBox="0 0 100 60"><rect x="20" y="15" width="20" height="30" rx="10" fill="none" stroke="currentColor" stroke-width="3"/><rect x="50" y="10" width="30" height="40" rx="15" fill="none" stroke="currentColor" stroke-width="3"/></svg>` },
    { c: "Equilibrio", d: "Distribución de pesos visuales compensados.", svg: `<svg class="text-brand-blueSky" viewBox="0 0 100 60"><line x1="10" y1="45" x2="90" y2="45" stroke="currentColor" stroke-width="3"/><polygon points="50,25 60,45 40,45" fill="currentColor"/></svg>` },
    { c: "Semejanza", d: "Agrupación perceptiva por atributos análogos.", svg: `<svg class="text-brand-magenta" viewBox="0 0 100 60"><circle cx="25" cy="30" r="10" fill="currentColor"/><circle cx="50" cy="30" r="10" fill="currentColor"/><rect x="68" y="20" width="18" height="20" fill="currentColor"/></svg>` },
    { c: "Continuidad", d: "Alineación visual que induce al ojo a seguir un flujo.", svg: `<svg class="text-brand-blueSky" viewBox="0 0 100 60"><path d="M10,40 Q50,10 90,40" fill="none" stroke="currentColor" stroke-width="3" stroke-dasharray="5"/></svg>` },
    { c: "Interfaz", d: "Punto de contacto operacional entre usuario y objeto.", svg: `<svg class="text-brand-magenta" viewBox="0 0 100 60"><rect x="15" y="10" width="70" height="40" rx="5" fill="none" stroke="currentColor" stroke-width="2"/><circle cx="50" cy="30" r="8" fill="currentColor"/></svg>` },
    { c: "Ley de Proximidad", d: "Agrupación visual de elementos cercanos entre sí.", svg: `<svg class="text-brand-blueSky" viewBox="0 0 100 60"><circle cx="20" cy="20" r="5" fill="currentColor"/><circle cx="32" cy="20" r="5" fill="currentColor"/><circle cx="75" cy="20" r="5" fill="currentColor"/><circle cx="87" cy="20" r="5" fill="currentColor"/></svg>` },
    { c: "Ley de Semejanza", d: "Asociación de estímulos con formas o colores iguales.", svg: `<svg class="text-brand-magenta" viewBox="0 0 100 60"><circle cx="20" cy="30" r="7" fill="currentColor"/><circle cx="40" cy="30" r="7" fill="currentColor"/><circle cx="60" cy="30" r="7" fill="currentColor"/></svg>` },
    { c: "Luces", d: "Zonas de alta reflectancia que revelan volumen.", svg: `<svg class="text-brand-blueSky" viewBox="0 0 100 60"><circle cx="50" cy="30" r="20" fill="currentColor"/><path d="M35,15 A15,15 0 0,1 55,15" fill="none" stroke="#fff" stroke-width="3"/></svg>` },
    { c: "Sombra", d: "Ausencia de luz que proyecta relief y profundidad.", svg: `<svg class="text-brand-magenta" viewBox="0 0 100 60"><ellipse cx="50" cy="45" rx="30" ry="8" fill="currentColor"/><circle cx="50" cy="25" r="15" fill="none" stroke="currentColor" stroke-width="2"/></svg>` },
    { c: "Textura", d: "Cualidad táctil y visual de una superficie.", svg: `<svg class="text-brand-blueSky" viewBox="0 0 100 60"><path d="M10,10 L90,10 M10,20 L90,20 M10,30 L90,30 M10,40 L90,40 M10,50 L90,50" stroke="currentColor" stroke-width="1" stroke-dasharray="2"/></svg>` },
    { c: "Iteración", d: "Repetición procedimental para refinar la forma.", svg: `<svg class="text-brand-magenta" viewBox="0 0 100 60"><path d="M20,30 A15,15 0 1,1 50,45" fill="none" stroke="currentColor" stroke-width="3"/><polyline points="45,50 50,45 52,52" fill="currentColor"/></svg>` },
    { c: "Homeomorfia", d: "Equivalencia topológica de formas deformables.", svg: `<svg class="text-brand-blueSky" viewBox="0 0 100 60"><circle cx="30" cy="30" r="15" fill="none" stroke="currentColor" stroke-width="2"/><path d="M60,15 C80,15 80,45 60,45 C50,45 50,15 60,15 Z" fill="none" stroke="currentColor" stroke-width="2"/></svg>` },
    { c: "Homotecia", d: "Escalamiento proporcional desde un centro fijo.", svg: `<svg class="text-brand-magenta" viewBox="0 0 100 60"><polygon points="20,45 35,20 50,45" fill="none" stroke="currentColor" stroke-width="2"/><polygon points="20,45 60,5 80,45" fill="none" stroke="currentColor" stroke-width="2"/></svg>` },
    { c: "Principios de Interrelación Formal", d: "Modos de contacto: toque, superposición, unión, etc.", svg: `<svg class="text-brand-blueSky" viewBox="0 0 100 60"><circle cx="40" cy="30" r="15" fill="none" stroke="currentColor" stroke-width="2"/><circle cx="60" cy="30" r="15" fill="none" stroke="currentColor" stroke-width="2"/></svg>` },
    { c: "Abstracción", d: "Síntesis de aspectos esenciales omitiendo detalles.", svg: `<svg class="text-brand-magenta" viewBox="0 0 100 60"><polygon points="50,10 80,50 20,50" fill="currentColor"/></svg>` },
    { c: "Simplificación", d: "Reducción de la forma a su mínima tensión visual.", svg: `<svg class="text-brand-blueSky" viewBox="0 0 100 60"><rect x="25" y="15" width="50" height="30" fill="none" stroke="currentColor" stroke-width="3"/></svg>` },
    { c: "Eideticidad", d: "Retención clara e imborrable de una forma en la memoria.", svg: `<svg class="text-brand-magenta" viewBox="0 0 100 60"><circle cx="50" cy="30" r="18" fill="currentColor"/></svg>` },
    { c: "Representación", d: "Evocación formal de una figura o referente real.", svg: `<svg class="text-brand-blueSky" viewBox="0 0 100 60"><path d="M30,45 C30,20 70,20 70,45 Z" fill="none" stroke="currentColor" stroke-width="3"/></svg>` },
    { c: "Símbolo", d: "Signo visual ligado a un significado por convención.", svg: `<svg class="text-brand-magenta" viewBox="0 0 100 60"><path d="M50,10 L50,50 M30,30 L70,30" stroke="currentColor" stroke-width="4"/></svg>` },
    { c: "Signo", d: "Unidad perceptible con función denotativa u operativa.", svg: `<svg class="text-brand-blueSky" viewBox="0 0 100 60"><polygon points="30,10 70,30 30,50" fill="currentColor"/></svg>` },
    { c: "Equilaridad", d: "Igualdad geométrica en lados y ángulos de una figura.", svg: `<svg class="text-brand-magenta" viewBox="0 0 100 60"><polygon points="50,10 85,48 15,48" fill="none" stroke="currentColor" stroke-width="3"/></svg>` },
    { c: "Singenomorfia", d: "Convergencia formal por compartir principios genéticos.", svg: `<svg class="text-brand-blueSky" viewBox="0 0 100 60"><path d="M20,20 Q50,40 80,20 M20,40 Q50,20 80,40" fill="none" stroke="currentColor" stroke-width="2"/></svg>` },
    { c: "Tracking", d: "Ajuste del espaciado uniforme en un bloque tipográfico.", svg: `<svg class="text-brand-magenta" viewBox="0 0 100 60"><text x="10" y="38" font-size="22" font-family="sans-serif" letter-spacing="8" fill="currentColor">A B C</text></svg>` },
    { c: "Kerning", d: "Ajuste fino del espacio entre un par de caracteres.", svg: `<svg class="text-brand-blueSky" viewBox="0 0 100 60"><text x="15" y="38" font-size="24" font-family="sans-serif" font-weight="bold" fill="currentColor">A V</text></svg>` }
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
})();