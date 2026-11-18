import {
  Apple,
  Activity,
  Baby,
  Bath,
  BookOpen,
  Bone,
  Brain,
  Candy,
  CalendarCheck,
  Car,
  Carrot,
  Coffee,
  Droplets,
  Dumbbell,
  Eye,
  Fish,
  Flame,
  FlaskConical,
  Flower2,
  Footprints,
  Gift,
  GlassWater,
  Heart,
  Leaf,
  Moon,
  Music,
  Palette,
  Pill,
  Plane,
  Scissors,
  ShieldCheck,
  Shell,
  Smile,
  Snowflake,
  Soup,
  Sparkles,
  Sprout,
  Star,
  Sun,
  Thermometer,
  Users,
  Waves,
  Wind,
  Zap,
  type LucideIcon,
} from "lucide-react";

export interface Post {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  date: string; // ISO
  minutes: number;
  icon: LucideIcon;
  content: string[]; // párrafos
}

export const posts: Post[] = [
  // ─────────────────────────── 2026 ───────────────────────────
  {
    slug: "remedios-caseros-resfriado-gripe",
    title: "Resfriado y gripe: el kit de remedios caseros que sí funciona",
    excerpt:
      "Jengibre, miel, limón y vapor: qué hacer las primeras 48 horas del catarro, qué evitar y cuándo conviene acudir al médico.",
    category: "Remedios",
    date: "2026-01-12",
    minutes: 7,
    icon: Thermometer,
    content: [
      "El resfriado lo causan virus, así que ningún remedio lo «cura»: lo que sí pueden hacer las medidas caseras es aliviar los síntomas, hidratarte y acompañar el sistema inmune mientras hace su trabajo, que suele ser en 7-10 días.",
      "Las primeras 48 horas son claves. Infusión caliente de jengibre con limón y miel: el jengibre aporta sensación de alivio en garganta y estómago, la miel ha demostrado en estudios reducir la tos nocturna (nunca en menores de 1 año), y el calor del líquido humedece las vías respiratorias. Añade tomillo o eucalipto al vapor si la nariz está tapada.",
      "También ayudan lo básico de siempre, que no por conocido deja de ser eficaz: descansar de verdad, beber más líquidos de lo habitual, humidificar la habitación y comer ligero pero completo (caldos, verduras, fruta). Evita el exceso de azúcar y de lácteos si notas que te congestinan más.",
      "¿Cuándo ir al médico? Si la fiebre supera los 38,5 °C más de tres días, si aparece dificultad para respirar, dolor intenso de oído o pecho, o si los síntomas empeoran tras una mejoría aparente. Los remedios caseros acompañan; no sustituyen la valoración profesional.",
    ],
  },
  {
    slug: "dolor-cabeza-migrana-remedios",
    title: "Dolor de cabeza y migraña: plantas y gestos que alivian",
    excerpt:
      "Menta, lavanda, hidratación y descanso visual: respuestas prácticas para la cefalea tensional del día a día y sus desencadenantes más comunes.",
    category: "Remedios",
    date: "2026-02-09",
    minutes: 6,
    icon: Brain,
    content: [
      "El dolor de cabeza más frecuente es el tensional: esa banda de presión que aparece tras horas de pantalla, tensión muscular o estrés. La migraña, en cambio, es otra cosa: suele ser intensa, pulsante, a un lado, y puede venir con náuseas o rechazo a la luz.",
      "Para la cefalea tensional, el aceite esencial de menta pipita diluido en las sienes y la nuca produce una sensación fresca que relaja la musculatura; la infusión de tila o de melisa ayuda a bajar revoluciones; y un masaje suave de cuello y trapecios durante cinco minutos marca diferencia si se hace con regularidad.",
      "Revisa los desencadenantes más habituales: no beber suficiente agua, saltarse comidas, dormir mal o de más, cafeína en exceso (o su retirada brusca) y pasarse horas sin moverse. Llevar un pequeño diario de episodios durante tres semanas suele revelar el patrón de cada persona.",
      "Un apunte importante: si el dolor de cabeza aparece de forma brusca y muy intensa, acompañado de fiebre, rigidez de cuello, alteraciones visuales o debilidad, no es el momento de las plantas: hay que acudir a un servicio de urgencias.",
    ],
  },
  {
    slug: "preparar-alergia-polen-primavera",
    title: "Alergia al polen: cómo preparar tu cuerpo antes de la primavera",
    excerpt:
      "Quercetina, ortiga, miel local y hábitos de casa: una estrategia realista para que la entrada de marzo no se te atragante.",
    category: "Prevención",
    date: "2026-03-10",
    minutes: 7,
    icon: Flower2,
    content: [
      "La alergia al polen no se cura, pero sí se atenúa: cuanto antes empieces a prepararte, menos dramática suele ser la temporada. Lo ideal es arrancar el plan 4-6 semanas antes de que el polen de tu zona empiece a dispararse, algo que puedes consultar en los calendarios polínicos y boletines de la Comunidad de Madrid.",
      "En el herbolario, los apoyos clásicos son la ortiga en infusión o cápsula (apoya con un efecto antihistamínico suave) y la quercetina, un pigmento vegetal presente en cebolla y manzana que estabiliza a los mastocitos, las células que desatan el picor y los estornudos. La vitamina C acompaña bien a la quercetina.",
      "Los gestos de casa pesan tanto como los suplementos: ducha y lavado de pelo al llegar a casa, ropa de calle fuera del dormitorio, ventilar en horas de menor concentración de polen (mañana temprano y después de llover) y lavar la ropa de cama con frecuencia. Mascarilla fina para barrer o cortar el césped, que se hace en las peores horas del polen.",
      "Y una nota de honestidad: la miel local tiene sus defensores, pero la evidencia es débil; tómala si te gusta, no como tratamiento. Si tus síntomas son intensos (asfixia, pitidos, ojos hinchados que no ves), el alergólogo y su plan farmacológico van primero. Las plantas pueden ser apoyo, no sustituto.",
    ],
  },
  {
    slug: "digestion-pesada-remedios",
    title: "Digestión pesada: qué tomar después de las comidas (y qué evitar)",
    excerpt:
      "Hinojo, hierbabuena, amargos y un paseo: el protocolo tras domingos copiosos y comidas de trabajo, con los errores que lo empeoran todo.",
    category: "Remedios",
    date: "2026-04-14",
    minutes: 6,
    icon: Soup,
    content: [
      "La digestión pesada suele tener tres causas principales: comer rápido y de más, grasa en exceso y comer estresado o de pie. El primer remedio, por tanto, no va en un sobre: es masticar despacio y dejar espacio en el estómago.",
      "Dicho esto, hay aliados clásicos. El hinojo en infusión es probablemente el más eficaz contra la sensación de hinchazón y los gases; la hierbabuena refresca y relaja el estómago (evítala si tienes reflujo frecuente, porque puede relajar demasiado el esfínter); y el jengibre o un trozo de piña tras la comida apoyan la actividad digestiva.",
      "Las plantas amargas funcionan de manera distinta y muy interesante: el diente de león o el boldo antes de la comida activan la producción de bilis, que es la que se encarga de procesar las grasas. Un puñado de rúcula o un vermut amargo sin alcohol tienen el mismo espíritu.",
      "Después de comer, media hora de paseo tranquilo ayuda más que quedarse inmóvil en el sofá, y tumbarse boca arriba justo tras la comida es peor opción todavía. Si la pesadez es habitual, va acompañada de pérdida de peso sin explicación, sangre en las heces o dolor nocturno, toca consulta médica: cualquier alternativa vegetal llega después del diagnóstico.",
    ],
  },
  {
    slug: "cansancio-primavera-energia",
    title: "Cansancio de primavera: por qué te sientes sin batería y cómo recargarla",
    excerpt:
      "Cambios de luz, sueño desordenado y hierro o vitamina D bajos: señales a vigilar y apoyos naturales para recuperar la energía.",
    category: "Bienestar",
    date: "2026-05-12",
    minutes: 7,
    icon: Zap,
    content: [
      "El «cansancio de primavera» no es un mito del todo: los cambios de luz y temperatura desordenan el reloj biológico, al tiempo que la agenda se llena de planes. El resultado es dormir menos horas y de peor calidad justo cuando el cuerpo se está ajustando.",
      "Antes de buscar un suplemento milagroso, descarta lo fácil: ¿duermes 7-8 horas? ¿comes cada 4-5 horas? ¿bebes suficiente agua? ¿llevas meses sin salir a la luz del día de manera regular? Muchos bajones de energía se resuelven con estos cuatro hábitos y algo de ejercicio al aire libre.",
      "Si pese a ello notas agotamiento, merece la pena hacerse un análisis básico: ferritina baja, vitamina D insuficiente, B12 o tiroides descompensadas explican más fatigas que cualquier planta. En la farmacia y el herbolario, las opciones de apoyo suave incluyen ginseng o rhodiola (adaptógenos con estudios moderados), espirulina y la siempre subestimada buena hidratación.",
      "Y una cadena de prudencia: el cansancio persistente que no mejora con descanso, o que aparece con otras señales (pérdida de peso, palidez, palpitaciones), es motivo de consulta, no de comprar más extractos. La energía vuelve cuando se atiende la causa real.",
    ],
  },
  {
    slug: "piernas-cansadas-calor",
    title: "Piernas cansadas con el calor: qué ayuda de verdad (según la evidencia)",
    excerpt:
      "Castaño de indias, elevar las piernas, duchas frías y aire: la rutina completa para soportar el verano si trabajas de pie o sentada.",
    category: "Bienestar",
    date: "2026-06-09",
    minutes: 6,
    icon: Footprints,
    content: [
      "Con el calor, las venas de las piernas se dilatan y la sangre cuesta más volver hacia el corazón: de ahí la sensación de pesadez y de hinchazón al final del día. Embarazo, genética, pasar mucho tiempo de pie o sentado y el calor mismo son los grandes desencadenantes.",
      "La planta de referencia aquí es el castaño de indias, cuyo principal activo (la escina) cuenta con estudios que muestran mejora de la pesadez y la hinchazón en insuficiencia venosa leve. También se usan la vid roja y el rusco. En formato tópico, el gel frío de castaño o de árnica aplicado de tobillo hacia arriba alivia al momento.",
      "Los gestos de cada día son la mitad del remedio: termina la ducha con agua fría en las piernas (de abajo hacia arriba), eleva los pies por encima del corazón 15-20 minutos al llegar a casa y muévete: caminar activa la bomba muscular que empuja la sangre. Y si tu trabajo es de silla, no cruces las piernas y levántate cada hora.",
      "Un límite importante: si notas un dolor en la pantorrilla de un solo lado, caliente y con hinchazón súbita, acude a urgencias: los trombos no se tratan con infusiones. Las varices visibles, dolorosas o que sangran, van a consulta de flebología.",
    ],
  },
  {
    slug: "ola-calor-golpe-calor-prevenir",
    title: "Ola de calor: cómo prevenir el golpe de calor y refrescarse con sentido",
    excerpt:
      "Hidratación con sales, horas de paseo, aloe vera y comidas frías: la guía del herbolario para los días de 40 grados.",
    category: "Prevención",
    date: "2026-07-14",
    minutes: 6,
    icon: Sun,
    content: [
      "Con las olas de calor cada vez más frecuentes, prevenir es mucho más eficaz que curar. Los más vulnerables son mayores de 65 años, bebés, personas con enfermedades crónicas y quien trabaja al aire libre, pero un golpe de calor no respeta edades.",
      "Hidratarse no es solo beber agua: con el sudor se van también sales y minerales. En días de sudor abundante ayuda repartir líquidos a lo largo del día (sin esperar a tener sed), añadir un pellizco de sal y algo de cítrico al agua, y comer frutas y verduras ricas en agua: sandía, melón, pepino, calabacín.",
      "Organiza la vida alrededor del fresco: paseos antes de las 11 y después de las 20 h, ventanas cerradas y persianas bajadas durante el día, un ventilador delante de una sábana húmeda o un difusor con un par de gotas de aceite de lavanda (la sensación de frescor es inmediata), duchas templadas —no heladas— y siestas cortas si el calor ha impedido dormir.",
      "Para la piel tras el sol, el aloe vera puro es el remedio clásico: refresca, hidrata y calma el eritema ligero. Y para la cabeza tras un día largo de calor, agua, sombra y reposo valen más que cualquier «reanimador». Ante confusión, piel caliente y seca o vómitos con mareo, hay que tratarlo como urgencia: el golpe de calor es una emergencia médica.",
    ],
  },
  {
    slug: "botiquin-natural-viajar",
    title: "El botiquín natural de viaje: 10 esenciales que caben en la toilette",
    excerpt:
      "Aceite de árbol de té, arcilla, probióticos, caléndula y más: qué llevar en las vacaciones para improvisar menos y salir de cualquier apuro.",
    category: "Consejos",
    date: "2026-08-11",
    minutes: 7,
    icon: Waves,
    content: [
      "Un buen botiquín de viaje no es meter la farmacia entera en la maleta: se eligen pocas cosas, versátiles y con varios usos. Estas son las que recomendamos cada año en el herbolario antes de agosto.",
      "El aceite esencial de árbol de té es el camaleón del kit: sirve para desinfectar pequeños cortes y picaduras (siempre diluido), y como aliado antiodor en los pies. La caléndula en crema cubre el resto de la piel: quemaduras solares ligeras, rozaduras, piel irritada. La arcilla verde, mezclada con agua, sirve para picaduras y para una mascarilla exprés de viaje.",
      "Para el estómago de viaje (cambios de agua, comidas nuevas), los probióticos tomados unos días antes y durante el viaje reducen el riesgo de diarrea del viajero en algunos estudios; suma carbón activado por si acaso y lleva infusión de hierbabuena o hinojo en bolsitas, que siempre puedes pedir en agua caliente en cualquier bar.",
      "Un mentolado en gotas o stick ayuda con mareos de viaje y congestiones; y no te olvides de lo no-natural pero necesario: suero fisiológico, un protector solar de verdad y, si viajas al extranjero con medicación habitual, la receta y una copia extra en el equipaje de mano. Heridas profundas, picaduras con reacción fuerte o fiebres altas: farmacia o urgencias, siempre.",
    ],
  },
  {
    slug: "vuelta-ritmo-defensas-otono",
    title: "Vuelta al ritmo: defensas, estrés y rutinas para un septiembre sin sustos",
    excerpt:
      "Propóleo, equinácea y un plan de sueño: cómo preparar el cuerpo para la vuelta al cole y al trabajo sin caer en el primer resfriado.",
    category: "Prevención",
    date: "2026-09-08",
    minutes: 7,
    icon: ShieldCheck,
    content: [
      "Septiembre concentra dos cosas que castigan a las defensas: el cambio de rutina brusco (horarios, aire acondicionado a full, contacto con mil criaturas en el cole) y el estrés de la vuelta. La buena noticia es que mucho de esto se prepara desde agosto.",
      "Empieza por el sueño: adelanta gradualmente la hora de ir a la cama 15 minutos cada noche la semana anterior a la vuelta y recupera la luz natural de la mañana. El sueño es el regulador inmune más potente que existe, y no hay extracto que lo supla.",
      "Como apoyos de temporada: el propóleo (resina de abeja con actividad antibacteriana y antiinflamatoria estudiada) y la equinácea como apoyo al inicio de cualquier síntoma de catarro, en ciclos cortos. Y algo sencillo que funciona: alimentos fermentados a diario y una dieta con fibra, porque buena parte del sistema inmune vive en el intestino.",
      "Gestiona la carga, no la escondas: agenda realista la primera semana, pausas de cinco minutos por hora de pantalla y algo de ejercicio tres días a la semana. Si el estrés de la vuelta se convierte en ansiedad sostenida, problemas de sueño persistentes o apatía varias semanas, procura no normalizarlo y busca apoyo profesional.",
    ],
  },
  {
    slug: "insomnio-otono-protocolo",
    title: "Insomnio de otoño: un protocolo de 7 días para recuperar el sueño",
    excerpt:
      "Valeriana, pasiflora y melatonina natural: un plan semana a semana, con higiene de sueño real y sin pasar por alto el café de las 17:00.",
    category: "Bienestar",
    date: "2026-10-13",
    minutes: 8,
    icon: Moon,
    content: [
      "Cuando cambian las horas y las tardes se vuelven oscuras, muchas personas notan que el sueño se desordena: cuesta caer, hay despertares a las 3 y la mañana llega con pesadez. Este protocolo de una semana ordena los factores que más influyen.",
      "Días 1-2: auditoría honesta. Anota hora de acostarse, de despertar, cafés y sus horas, pantallas de noche, alcohol. El alcohol seda al principio y fragmenta el sueño después; la cafeína tiene una vida media de unas 5-6 horas, así que el café de media tarde sigue activo a medianoche.",
      "Días 3-5: construcción del rito. Última comida ligera dos horas antes de dormir; 30-45 minutos de pausa sin pantallas con luz cálida, infusión de valeriana, tila o pasionaria (la melisa también funciona y tiene buen sabor), estiramiento suave y habitación oscura y fresca (18-20 °C). La regularidad importa más que la perfección: mismos horarios todos los días.",
      "Días 6-7: ajuste fino. Si tras cinco días notas mejora, consolida; si despiertas y pasas más de 20-25 minutos despierto, levántate y haz algo tranquilo con poca luz hasta tener sueño. Y recuerda: el insomnio de más de tres semanas merece consulta, igual que los ronquidos con pausas respiratorias, que pueden indicar apnea.",
    ],
  },
  {
    slug: "animo-bajo-luz-escasa",
    title: "Ánimo bajo sin luz: qué ayuda cuando el otoño se hace largo",
    excerpt:
      "Luz por la mañana, movimiento, vitamina D y aromas cítricos: apoyo natural para el bajón de noviembre, con señales que piden ayuda profesional.",
    category: "Bienestar",
    date: "2026-11-10",
    minutes: 7,
    icon: Sun,
    content: [
      "Con el cambio horario, media España se levanta y vuelve a casa a oscuras, y el ánimo lo nota. En casos más francos se habla de trastorno afectivo estacional, pero hasta una caída leve de energía y humor merece atención: es biología, no debilidad.",
      "Lo que más evidencia acumula es la luz: salir a la calle 20-30 minutos a primera hora, aunque esté nublado, ayuda a sincronizar el reloj y a sostener el ánimo. Si el bajón es fuerte, las lámparas de luz brillante (10 000 lux) usadas por la mañana son una opción validada, mejor asesorada por un profesional.",
      "Suma movimiento regular (caminar cuenta y funciona), conexión social real (una llamada a un amigo, un café con alguien) y pequeñas rutinas placenteras. En el herbolario se usan los aromas cítricos de naranja y bergamota como compañía de ánimo en el difusor, y la vitamina D se revisa en análisis si hay poca exposición solar.",
      "Un apunte serio: el hipérico (hierba de San Juan) se conoce como «planta del ánimo» y tiene estudios, pero interacciona con muchos medicamentos —anticonceptivos, anticoagulantes, antidepresivos— y puede ser peligrosa. Nunca la combines por tu cuenta si tomas medicación sin consultarlo. Y si hay tristeza profunda sostenida, ideas de dañarse o pérdida de interés en casi todo, el psicólogo o el médico son el primer y único paso; las plantas van después.",
    ],
  },
  {
    slug: "calendario-adviento-24-tazas",
    title: "Calendario de adviento herbolario: 24 infusiones para contar los días",
    excerpt:
      "Del 1 al 24 de diciembre, una bolsita distinta por día: cómo montar el calendario de tazas que sustituye al chocolate, con sorpresas incluidas.",
    category: "Consejos",
    date: "2026-12-01",
    minutes: 5,
    icon: Star,
    content: [
      "El calendario de adviento no tiene por qué ser una pared de chocolates: veinticuatro infusiones distintas —una por día— son el ritual que el herbolario más monta cada diciembre, y se arma en una tarde con bolsitas de papel, un cordel y etiquetas escritas a mano.",
      "Las dos primeras semanas piden tazas de estación: rooibos con naranja (sin teína, para cualquier hora), manzanilla con limón, té verde con jazmín para las mañanas de compras y un jengibre-limón para los días de frío. La gracia está en la variedad: cada día una planta, ninguna repetida antes del día 20.",
      "Las últimas semanas van a lo práctico: hinojo tras las cenas de empresa, hierbabuena para los días largos, tila y melisa para las noches de envolver regalos a medianoche, y el día 24, una mezcla de navidad con canela, clavo y naranja que prepara el paladar para la noche buena. Envuelve cada bolsita con un número y una nota de uso: son un minuto de pausa, no una dosis.",
      "Tres avisos de sentido común: las tisanas del calendario son pausas, no medicamentos (nada de sustituir tratamientos por infusiones, sea diciembre o no); en embarazo y lactancia se revisan las plantas con el farmacéutico antes de armar el calendario; y todo tiene fecha —las hierbas pierden aroma, y un calendario de adviento caducado pierde la gracia—.",
    ],
  },
  {
    slug: "especias-navidad-canela-clavo",
    title: "Canela, clavo y cardamomo: las especias de navidad y lo que aportan",
    excerpt:
      "El aroma de diciembre tiene química de verdad: qué aporta cada especia de la cocina navideña, cómo usarla más allá del postre y sus límites.",
    category: "Consejos",
    date: "2026-12-02",
    minutes: 6,
    icon: Flame,
    content: [
      "No es casualidad que la canela, el clavo, el anís y el cardamomo aparezcan juntos cada diciembre: son especias cálidas y aromáticas que encajan con las comidas copiosas del invierno y, de paso, hacen magia olfativa en cada casa. Pero detrás del aroma hay moléculas activas, y conviene saber qué hace cada una.",
      "La canela, la reina de la temporada: en dosis de cocina aporta sabor y tiene estudios (en extractos concentrados, ojo, no en el azucarillo) sobre su influencia en la glucosa. El clavo concentra eugenol, con acción antiséptica tradicional —el remedio de toda la vida para el dolor de muelas es un clavo mordido: alivio temporal, no tratamiento—. El cardamomo y el anís acompañan bien las digestiones pesadas, en infusión o en la infusión que se sirve tras la cena.",
      "Más allá del postre, las especias trabajan: vin caliente sin alcohol (agua, corteza de naranja y especias en vez de vino) para los invitados que conducen, agua con canela y manzana asada en el frutero, leche dorada con cúrcuma y pimienta para las noches frías, y una mezcla de sal gruesa con romero y tomillo que llena cualquier lote de regalo. En cocina, tostar las especias un minuto en la sartén las despierta: la diferencia se nota al primer sorbo.",
      "Los dos límites de temporada: la canela cassia —la más barata— lleva cumarina, y dosis altas de ella a diario durante meses no conviene al hígado; en navidad no pasa nada, en consumo perpetuo sí, y la canela de Ceilán es la alternativa. Y el aceite esencial de clavo nunca se toma ni se usa directo en boca o en la encía de niños: se diluye o se queda en el bote. Las especias son cocina generosa, no botiquín libre.",
    ],
  },
  {
    slug: "estres-navideno-plan-sobrevivir",
    title: "Estrés de navidad: el plan de diciembre para bajar revoluciones",
    excerpt:
      "Compras, cenas, familia y el presupuesto que se descuelga: gestión real del estrés navideno, con apoyos suaves y lo que ninguna planta resuelve.",
    category: "Bienestar",
    date: "2026-12-04",
    minutes: 6,
    icon: Brain,
    content: [
      "Diciembre apila el estrés como ningún mes: la agenda se llena de compromisos, las compras empujan al presupuesto, la familia reúne viejas tensiones y las listas de tareas aparecen en cada papel. El estrés navideno no es debilidad: es demasiada expectativa en pocas semanas.",
      "El plan empieza con tres decisiones, todas gratis: agenda con espacios en blanco (aunque nadie entienda que no hay plan), presupuesto de regalos escrito antes de pisar una tienda —el dinero que marca el límite evita el enero amargo— y permiso para decir no a alguna cena. La mitad del estrés navideno no viene de las fiestas: viene de intentar cumplirlas todas a la vez.",
      "Los pilares de calma que funcionan: paseos a la luz del día (diciembre poca ofrece, pero la que hay vale doble), respiración lenta —exhalar más largo de lo que se inhala, cinco minutos al día—, y pausas sin pantalla antes de dormir. Del herbolario, la tila y la melisa puntuales por la noche, la lavanda en el difusor o un baño templado con unas gotas, y un masaje de hombros y nuca con aceite de lavanda diluido; todo suma sensación, no milagro.",
      "Y el límite que se dice claro: el alcohol no gestiona el estrés, solo lo aplaza y lo devolverá con sueño partido; el estrés que se instala semanas, el insomnio que no cede, la irascibilidad que asusta o el desánimo que no se va piden hablar con un profesional antes de pedir otra mezcla de plantas. Navidad puede ser una época pesada; aguantarla en silencio no es la tradición que interesa sostener.",
    ],
  },
  {
    slug: "fiestas-diciembre-excesos",
    title: "Fiestas de diciembre: sobremesas ligeras y remedios para los excesos",
    excerpt:
      "Alcachofa, hinojo, carbón activo y paseos: cómo disfrutar las cenas de navidad sin que el estómago pida la baja.",
    category: "Consejos",
    date: "2026-12-08",
    minutes: 6,
    icon: Leaf,
    content: [
      "Las cenas de diciembre no tienen por qué acabar en digestión de diez horas ni en arrepentimiento. La estrategia empieza el día previo: comidas ligeras y con verdura, buena hidratación y algo de movimiento. El cuerpo aguanta mucho mejor un festín si no llega ya saturado.",
      "En la mesa, funciona la técnica clásica del plato pequeño y de servirte una sola vez; el alcohol pide moderación y agua intercalada, que además rebaja la resaca del día siguiente. Y postres: mejor una ración buena que tres, y más si ya has repetido de marisco y de asado.",
      "Tras la cena, el trío clásico: infusión de hinojo o de hierbabuena para los gases, un paseo de 20-30 minutos que acelera la digestión y, si la noche ha sido épica, carbón activado (que arrastra gases y toxinas; tómalo lejos de otros medicamentos porque puede interferir con ellos). El día siguiente: líquidos, fruta, caldo y sobremesa tranquila, y alcachofa o desmodium si sabes que el hígado ha trabajado.",
      "El paseo de la tarde del 25 y el 31 —cualquier día, de hecho— es el mejor desintoxicante que existe y es gratis. Y recuerda lo básico: estos remedios acompañan un exceso puntual, no un mes entero de excesos diarios. Si hay hinchazón y pesadez que no van, o si tomas medicación crónica, valora consulta: las fiestas no deberían costar una visita al médico.",
    ],
  },
  {
    slug: "copas-navidad-alcohol-alternativas",
    title: "Las copas de navidad: alcohol con cabeza y alternativas con estilo",
    excerpt:
      "Cada copa la procesa el hígado a un ritmo fijo que ningún truco acelera: tácticas de mesa, alternativas sin alcohol dignas de copa y las líneas rojas de diciembre.",
    category: "Prevención",
    date: "2026-12-10",
    minutes: 6,
    icon: GlassWater,
    content: [
      "Las fiestas de diciembre vienen con copa, y conviene conocer las matemáticas del brindis: el hígado procesa el alcohol a un ritmo fijo que ningún remedio acelera —unos diez gramos por hora, que es una copa pequeña y su tiempo—. El café, la ducha fría o el aire fresco bajan la sensación de embriaguez, no la cantidad real de alcohol en sangre.",
      "Las tácticas que sí pican: comer antes de la primera copa (el estómago vacío entrega el alcohol al torrente mucho más rápido), intercalar un vaso de agua por cada copa, servir en vasos pequeños y en menos ocasiones, y espaciar en el tiempo. Lo que una noche entera puede repartir en varias copas no cabe en una ronda única: el corazón, el sueño y la mañana del día siguiente lo agradecen.",
      "Las alternativas sin alcohol ya no son el mosto triste de antaño: kombucha con hielo y limón, agua con gas infusionada con naranja, romero y un toque de canela —la versión casera y tibia del vin caliente—, tisanas frías de temporada con hierbabuena y piel de cítricos, o un mosto espumoso para el brindis. El gesto del anfitrión más valioso de diciembre: que quien no bebe —porque conduce, porque está embarazada, porque no quiere— tenga algo digno en su copa.",
      "Y las líneas rojas, sin diplomacia: cero alcohol durante el embarazo y la lactancia (nada de «una copa no hace daño»), cero antes de conducir, y cuidado con los fármacos que se cruzan con el alcohol —antihistamínicos somníferos, metronidazol entre otros—, con aviso en la farmacia antes de la cena. Y otra conversación de navidad que también se toca en diciembre: si la copa de cada noche dejó de ser fiesta para volverse necesidad, el primer mejor remedio es hablarlo con el médico.",
    ],
  },
  {
    slug: "aromas-casa-navidad-natural",
    title: "Los aromas de la casa en navidad: abeto, naranja y clavo sin humo",
    excerpt:
      "El olor a diciembre se fabrica con pomander, cazuelas en la estufa y ramos de plantas aromáticas, sin que las velas carguen el aire de partículas.",
    category: "Estilo de vida",
    date: "2026-12-11",
    minutes: 5,
    icon: Sparkles,
    content: [
      "Cada navidad tiene un olido, y casi siempre es de origen casero: abeto, naranja, clavo, canela. La buena noticia es que todos se fabrican en casa sin depender de velas aromáticas e incienso, que además de perfumar cargan el aire interior de partículas finas, justo cuando las ventanas están cerradas por la calefacción.",
      "Los clásicos que funcionan: el pomander —una naranja clavada con clavos de especia, que perfuma la frutera y los armarios durante semanas—; la cazuela suave al fuego con agua, cáscara de naranja, canela y unas ramitas de pino (recargando agua de vez en cuando); y el ramillete de romero y eucalipto atado a la llave del radiador: el calor libera su aroma cada vez que pasa quién entra.",
      "Con difusor, los aceites de naranja dulce, abeto o ciprés —pocas gotas, diluidos— acompañan la sobremesa sin quemar nada. Para los armarios, las bolsitas de lavanda, cedro o corteza de canela huelen al abrir y de paso ahuyentan polilla. Y sigue valiendo la regla del invierno: ventilar diez minutos al día; el mejor aroma de una casa de diciembre es el aire que se renueva.",
      "Las precauciones que poca gente recuerda: los aceites esenciales no van directos sobre la piel y son tóxicos para gatos y perros (que lo sufren en silencio); en embarazo, lactancia y con bebés en casa, diluir y asesorarse antes; y nada de difusores, velas o cazuelas junto a cables, cortinas o manos pequeñas. El olor a navidad se evoca bien en la memoria; en urgencias, no.",
    ],
  },
  {
    slug: "resaca-mitos-remedios-verdad",
    title: "La resaca: qué funciona al día siguiente y los mitos de siempre",
    excerpt:
      "Deshidratación, inflamación y sueño roto: por qué no existe el remedio milagro, qué alivia de verdad y las señales que ya no son resaca.",
    category: "Remedios",
    date: "2026-12-15",
    minutes: 5,
    icon: Droplets,
    content: [
      "La resaca no es un castigo moral: es una foto clínica con nombre —deshidratación, irritación gástrica, sueño fragmentado y trabajo hepático en curso— y una ley que ningún truco salta: solo pasa con el tiempo. Lo que sí se puede es hacer la espera más llevadera.",
      "Lo que ayuda de verdad: agua a lo largo del día, con un pellizco de sal o una bebida suave de sales para reponer lo que el sudor y el alcohol se llevaron; comida ligera de fruta, caldo y pan, porque el estómago irritado ama lo sencillo; dormir lo que se pueda (aunque el sueño de resaca sea de peor calidad); e infusiones templadas de jengibre o hierbabuena para el estómago. El café alivia el dolor de cabeza puntual, pero con moderación, porque deshidrata más.",
      "Los mitos que se jubilan: «curarse con otro trago» solo aplaza la factura y entrena un mal hábito; el carbón activado, útil para gases y para algunas intoxicaciones agudas tratadas por profesionales, ya no puede coger el alcohol absorbido; la ducha fría no acelera nada; y la famosa fructosa como antídoto promete más de lo que la evidencia respalda.",
      "Y las señales que no se llaman resaca: vómitos persistentes que impiden beber, sangre en el vómito, confusión, convulsiones o inconsciencia son intoxicación alcohólica, y esa se trata en urgencias. La resaca ocasional se lleva con agua y paciencia; la resaca de cada fin de semana, o la que se usa como excusa para faltar a lo importante, se lleva al médico: es una de las conversaciones más repetidas y más eficientes en consulta, y no se arregla con infusiones.",
    ],
  },
  {
    slug: "carretera-navidad-contractura-mareo",
    title: "Carretera de navidad: llegar bien a casa de la abuela",
    excerpt:
      "Atascos, asientos clavados y niños imposibles: postura al volante, pausas que valen, jengibre para el mareo y las reglas no negociables del conductor.",
    category: "Bienestar",
    date: "2026-12-16",
    minutes: 5,
    icon: Car,
    content: [
      "Diciembre pone a millones en la carretera los mismos días, y las horas de atasco, frío y asiento clavado se cobran en cuello, espalda y estado de ánimo al llegar. El viaje de navidad se planifica como una cena: con antelación, con margen y con humor, porque el estresado que sale tarde es, en la cola del atasco, el mismo que después llega indispuesto.",
      "La postura al volante es la base: respaldo casi vertical, espalda pegada y con apoyo lumbar (una toalla enrollada sirve), muñecas sueltas al volante y hombros abajo; y cada dos horas, una pausa de diez minutos para caminar, aunque el atasco invite solo a estirar el cuello y abrir la ventana un minuto. Agua y fruta en el viaje en vez del café y la bollería, y esa gran cena la noche antes del gran viaje: mejor ligera que copiosa.",
      "Para el mareo de viaje: mirar al horizonte en vez de al móvil, sentarse adelante cuando se pueda, aire fresco en la cara —el clásico que funciona—, y el jengibre en infusión o cápsula como apoyo tradicional del estómago del viajero. Con los niños, entretenimiento que mire arriba del asiento —canciones, audios, juegos de vista—, y una bolsa de emergencia a mano, por si acaso: siempre por si acaso.",
      "Y las reglas sin negociación: quien conduce duerme sus horas —el sueño al volante no se compensa con ventanilla ni con música—, no bebe alcohol ni toma medicación somnífera o antihistamínicos que seden, y anuncia el cansancio: paradas cada dos horas aunque el GPS proteste. Y una nota familiar: si en el viaje alguien toma calmantes para el mareo o el insomnio, se lee el prospecto con la misma atención que la ruta; diciembre se llega mejor con menos sustos.",
    ],
  },
  {
    slug: "navidad-ninos-azucar-sueno",
    title: "Navidad con niños: azúcar, sueño roto y el catarro del cole",
    excerpt:
      "Turrón a cualquier hora y cenas a las once: cómo administrar la dulzura de diciembre sin arruinar el sueño ni las defensas de los pequeños.",
    category: "Salud",
    date: "2026-12-18",
    minutes: 6,
    icon: Baby,
    content: [
      "La navidad de los niños trae tres fotos paralelas: el azúcar que entra a granel, el sueño descolocado por las cenas de familia y el catarro que viaja en las aulas justo a tiempo para las vacaciones. Los tres se llevan con criterio, sin convertir diciembre en un campamento disciplinario ni en un curso de improvisación absoluto.",
      "El dulce, con reglas claras: el turrón del 24 y el roscón del 6 son postres de verdad y las fiestas están para ello; lo que descoloca no es el festín, es el bombardeo diario de bote en la mesa. Los gestos de casa que pesan más que cualquier prohibición: el chocolate no entra en el desayuno ni en la merienda de entre semana ni en la mochila del cole, y las golosinas no se usan como premio por comer. Los niños aprenden a relacionarse con la navidad igual de bien sin el desfile nocturno de turrón.",
      "El sueño: se relaja la hora de acostarse —es navidad—, pero la hora de despertar y las siestas se sostienen: los niños regulan el sueño con regularidad, y una semana de descolote se cobra en un enero con más pesadez y más llanto de lo habitual. Y si el catarro llega justo para las vacaciones, el manual es viejo pero funciona: descanso, líquidos, vapor, suero nasal y, si el niño tiene más de un año, una cucharadita de miel para la tos nocturna; nada de aspirina con fiebre ni antibióticos por cuenta propia, porque el catarro es vírico.",
      "Y las medidas de seguridad que de verdad importan: pilas de botón y adornos pequeños fuera del alcance —la pila de botón en el estómago es urgencia sin excusa—, velas y luces nunca encendidas sin supervisión, y la vigilancia amable de la época de urgencias más ocupada del año: se lleva mejor con prevención que con remedios de emergencia. Diciembre conviene custodiar la casa, y en navidad más: el mejor artículo de seguridad infantil siempre es un adulto cerca, sin ocupar el sitio del árbol.",
    ],
  },
  {
    slug: "abuelos-navidad-frio-compania",
    title: "Los mayores en navidad: frío dentro de casa, caídas y compañía",
    excerpt:
      "El frío mata más en el salón que en la calle: temperatura doméstica, prevención de caídas, gestión de la medicación y la soledad de diciembre.",
    category: "Prevención",
    date: "2026-12-20",
    minutes: 6,
    icon: Heart,
    content: [
      "La paradoja del invierno de los mayores: el frío que más peligros encierra no es el de la calle, es el de la casa. Con la edad se pierde percepción del frío y de la sed, baja la masa muscular y, con la factura de la luz en diciembre, muchas casas de personas mayores están más frías de lo que nadie de fuera imagina. Eso se corrige visitando, no relevando.",
      "Lo doméstico: la casa de una persona mayor en invierno rondan los 21-23 °C en el salón y no baja de 18 °C en el dormitorio; un termómetro de tres euros resuelve la primera discusión. Calor seco de calefacción pide hidratación ofrecida, no pedida, y las caídas se previenen en los detalles: alfombras pequeñas fuera, luz encendida de noche en el pasillo, calzado con suela en vez de zapatillas gastadas, y la escalera acompañada, no vigilada de lejos.",
      "La medicación y la salud: las fiestas desarbolan rutinas, y los análisis de fin de año que pidió el médico no se cancelan por la cena del 24. Lo idóneo es una lista escrita de todo lo que toma —plantas incluidas— a mano para los cuidados de las visitas, y avisar al farmacéutico si alguien del clan está empezando un tratamiento nuevo; los remedios del herbolario también se menciona en esa lista. Con fiebre, confusión repentina o caída sin explicación, la respuesta de diciembre no es esperar a enero: es llamar.",
      "Y la compañía, que es el único remedio sin bote cuya ausencia es un factor de riesgo sanitario: la soledad de las fiestas pesa más que la del resto del año, y no se repara con un puñado de mensajes el 25. Una visita a media mañana, una llamada en vídeo de diez minutos dos veces por semana y un plan pequeño pero concreto —paseo corto, merienda en la mesa— sostienen el ánimo mejor que cualquier extracto. El mejor regalo para un mayor: la agenda de enero ya por delante, con fechas concretas y nombres propios.",
    ],
  },
  {
    slug: "voz-garganta-fiestas-villancicos",
    title: "Voz y garganta en fiestas: villancicos, juergas y afonía",
    excerpt:
      "Frío, alcohol, conversación a gritos y canciones de sobremesa: cómo cuidar la garganta del diciembre social y cuándo la ronquera pasa de simpática a consulta.",
    category: "Remedios",
    date: "2026-12-22",
    minutes: 5,
    icon: Music,
    content: [
      "La garganta de diciembre trabaja en condiciones de exigencia: salas con calefacción seca, conversaciones a media voz —que en realidad es a gritos—, humo, alcohol, frío de calle y un villancico que exige la voz de doce personas a la vez. La voz no es un instrumento infinito, y lo nota quien más la usa.",
      "Los cuidados que funcionan: agua frecuente (la voz se hidrata con lo que se bebe, no con pastillas aromáticas), vapor —ducha caliente o un bol de agua templada con la toalla encima por la noche—, miel y limón templado para el picor, y descanso vocal: hablar menos el día siguiente de la gran sobremesa. Y dos prohibiciones que pocos conocen: no susurrar, que fuerza la voz más que hablar, y no carraspear cada dos frases, que golpea las cuerdas: mejor tragar saliva o beber un poco de agua.",
      "Para el ambiente: humidificar la habitación (40-60 % es la zona amable para la mucosa), evitar el humo de tabaco —el gran enemigo de la garganta de diciembre—, y en las gargantas irritadas de la temporada, los clásicos del herbolario: gárgaras de infusión templada de salvia o tomillo, y el spray de propóleo como apoyo puntual. Nada de eso sustituye al silencio cuando la voz pide silencio.",
      "Y las banderas de consulta: ronquera que dura más de dos o tres semanas sin explicación, voz que se acaba del todo, dolor de garganta con fiebre alta y placas blancas, o dificultad para tragar líquidos van a consulta, no a otra infusión. La garganta gripeada de la sobremesa se recompone en tres días; la que se queda, se mira pronto: en garganta, el diagnóstico temprano vale más que cualquier remedio.",
    ],
  },
  {
    slug: "manos-pies-frios-circulacion",
    title: "Manos y pies helados: circulación de diciembre",
    excerpt:
      "Cuando los dedos no se calientan ni con guantes: qué es normal, qué mejora la circulación periférica, qué lo empeora y cuándo se investiga.",
    category: "Salud",
    date: "2026-12-28",
    minutes: 6,
    icon: Snowflake,
    content: [
      "Las manos de hielo de diciembre no son una exageración: el cuerpo, con frío, prioriza la sangre para el tronco y la cabeza, y las extremidades se quedan a la cola. Las mujeres jóvenes y las personas mayores viven más esta reorganización; y hay quienes la tienen extremada —el síndrome de Raynaud hace que los dedos pasen de blanco a azul y de ahí a rojo, con hormigueo y dolor al reaccionar—.",
      "Lo que ayuda en diciembre: vestir por capas —el torso caliente permite al cuerpo soltar más sangre hacia los pies y las manos—, guantes y calcetines de lana merina en vez de algodón que se humedece, y un calzado que no apriete: la bota ajustada estrangula la circulación y enfría más, no menos. Los gestos que remontan: mover manos y pies en círculos, agua alternada frío-caliente en las extremidades (una ducha de contraste casera que despierta la circulación), y calor en las muñecas y en el torso antes que en los dedos.",
      "Desde dentro: moverse a diario —el músculo de la pantorrilla es la bomba del retorno venoso—, moderar el café, que estrecha los vasos periféricos, y saber que el tabaco es el enemigo número uno de la circulación, por más etiqueta que lleve el paquete. En el herbolario, las infusiones de romero y jengibre tienen fama de calentar; y el castaño de indias, referente de las piernas cansadas de verano, también se usa en invierno en gel tópico —pesadez no es lo mismo que frío, pero comparten vitrina—.",
      "Las señales de investigación: dedos que cambian de color con el frío en episodios repetidos (Raynaud que merece diagnóstico: en algunos casos se asocia a otros problemas), manos frías solo de un lado con dolor, entumecimiento permanente, llagas en los pies que no cierran (con diabetes, de inmediato) o cansancio y palidez que acompañan al frío. El frío de diciembre es un problema de abrigo; el frío que no se explica, un problema de análisis.",
    ],
  },
  {
    slug: "soledad-familia-navidad-lamentales",
    title: "Navidad en soledad (o en familia): salud mental y agenda propia",
    excerpt:
      "Las fiestas amplifican lo que hay: a unos les sobra silencio y a otros no les sobra espacio. Planes para ambos, límites sanos y señales de pedir ayuda.",
    category: "Bienestar",
    date: "2026-12-30",
    minutes: 6,
    icon: Users,
    content: [
      "Las fiestas no fabrican sentimientos: los amplifican. A quien está solo, diciembre le dobla la soledad; a quien está rodeado, le dobla la saturación. Los dos son puntos de cuidado real y los dos se llevan mejor con plan que sin él: la navidad no se sobrevive, se administra.",
      "Para la soledad, el antídoto es concreto, no inspirador: buscar antes del 20 de diciembre un plan para el 25 —voluntariado de navidad, mesa con vecinos o amigos en la misma situación, la clásica película del mediodía programada—, porque el día vacío se planifica mejor de lo que se improvisa. Suma moverse (un paseo largo por la ciudad vacía tiene otra luz), la luz de la mañana y una rutina mínima: despertar, cama, cuerpo, alguien. Lo difuso no calma: una llamada programada con hora, sí.",
      "Para la saturación familiar, los límites del «suficientemente bueno»: reservar un hueco de espacio propio al día —paseo, llamada a un amigo, cuarto con la puerta cerrada—, responder con humor antes que con historia, y recordar la estadística exacta: ninguna sobremesa ya ha resuelto veinte años de discusiones, así que el objetivo navideño es que nadie salga dañado, no que nadie salga convencido. El «sí a la cena, no al después» se anota en la agenda; lo que no está en la agenda, no existe.",
      "Y la línea de ayuda profesional, dicha con claridad: tristeza profunda que se instala, insomnio sostenido, consumo que crece en las fiestas o pensamientos de dañarse no se gestionan con infusiones ni con voluntad —en España, el 024 es la línea de atención a la conducta suicida y el 112 para urgencias—. El herbolario acompaña bien con tila, melisa y aromas de temporada; pero los cuidados de diciembre más importantes se dan entre personas: llamar, ver y no dejar solo al que no quiere estar solo.",
    ],
  },

  // ─────────────────────────── 2027 ───────────────────────────
  {
    slug: "propositos-enero-detox-realista",
    title: "Propósitos de enero: detox realista (sin zumos milagro)",
    excerpt:
      "Diente de león, agua, verduras y menos ultraprocesados: cómo apoyar el cuerpo en enero sin caer en limpias imposibles ni dietas de moda.",
    category: "Bienestar",
    date: "2027-01-12",
    minutes: 7,
    icon: Carrot,
    content: [
      "Enero viene cargado de promesas de «detox total» y zumos verdes a 6 euros el litro. La buena noticia: tu hígado y tus riñones ya se desintoxican solos, 24 horas al día, desde siempre. Lo que puedes hacer es dejar de dificultarles el trabajo y darles el material que necesitan.",
      "El plan realista de enero: más agua (con la calefacción deshidratamos sin notarlo), verduras y frutas en cada comida, reducir ultraprocesados y alcohol (el gran reto de enero es el buen «cero alcohol un mes»), y dormir. No es glamuroso, pero es lo único que hay detrás de cada resultado de verdad.",
      "En la parte botánica, hay apoyos razonables para este mes: la infusión de diente de león tiene efecto diurético suave y se usa tradicionalmente como depurativa; el cardo mariano se asocia al cuidado del hígado por su silimarina; y el jengibre o el limón en agua templada por la mañana son un hábito agradable más que una medicina. Ninguno compensa una semana de ultraprocesados.",
      "Y una advertencia honesta para enero: las «limpias» agresivas, laxantes o ayunos extremos pueden causar deshidratación, alteraciones de electrolitos y rebote. Si vienes de un otoño lleno de excesos y quieres un cambio de verdad, el «detox» real es un objetivo pequeño, medible y de 52 semanas, no un fin de semana heroico.",
    ],
  },
  {
    slug: "piel-invierno-hidratacion",
    title: "Piel de invierno: hidratación desde dentro y desde fuera",
    excerpt:
      "Aceite de borraja, omega 3, humidificadores y duchas templadas: el plan completo para la cara, las manos y los labios de enero a marzo.",
    category: "Cosmética",
    date: "2027-02-09",
    minutes: 6,
    icon: Droplets,
    content: [
      "El invierno es la temporada en que la piel pide socorro: frío fuera, calefacción dentro y duchas calientes de más suman una sequedad que en la cara se nota, en las manos agrieta y en los labios descama. La solución va en dos direcciones: cuidar la barrera y humedecer el ambiente.",
      "Desde fuera: duchas templadas y cortas (el agua caliente disuelve los lípidos de la barrera), limpieza suave sin jabones agresivos, y crema o aceite justo tras la ducha con la piel todavía húmeda, que es cuando mejor se retiene el agua. Para manos y labios, reaplicar es la regla: cada vez que te las laves.",
      "Desde dentro, la grasa correcta es la mejor hidratante: omega 3 (pescado azul, nueces, linaza) y omega 6 de calidad (el aceite de borraja y de onagra son los clásicos del herbolario para piel seca) nutren la barrera lipídica. Y, sin olvidar el básico: beber agua; con calefacción, el aire del interior se queda seco y roba humedad a tu piel.",
      "Un truco de casa: el humidificador (o simplemente un plato de agua en cada radiador) cambia por completo la sensación de piel y de garganta por la mañana. Y una alarma: si hay descamación intensa, grietas que sangran o picor que despierta por la noche, puede ser dermatitis o psoriasis y va al dermatólogo, no a la estantería de cosmética natural.",
    ],
  },
  {
    slug: "preparar-aceites-macerados",
    title: "Prepara tus propios aceites macerados (caléndula, romero, lavanda)",
    excerpt:
      "La técnica de abuela con pasos de hoy: botella, ventana soleada, cuatro semanas de paciencia y un frasco de aceite para todo el año.",
    category: "Consejos",
    date: "2027-03-09",
    minutes: 7,
    icon: Sparkles,
    content: [
      "Un aceite macerado es simplemente una planta seca sumergida en aceite vegetal durante semanas para que le transfiera sus compuestos liposolubles. Es el remedio más barato y satisfactorio de la herboristería casera, y solo necesita tres cosas: planta seca de calidad, aceite estable y paciencia.",
      "La receta base: llena un tarro de vidrio un tercio con planta seca (la caléndula para pieles sensibles, la lavanda para relax, el romero para masajes musculares), cubre con aceite de oliva o de girasol fino, cierra y deja en un lugar luminoso pero sin sol directo durante 3-4 semanas, agitando cada pocos días. Cuela con tela o colador fino y guarda en botella oscura lejos del calor.",
      "Reglas de oro: la planta siempre seca (la fresca puede generar moho), el tarro limpio y seco, y nada de agua en el interior. Si quieres acelerar, hay maceración al baño maría suave (2-3 horas a temperatura baja), aunque la lenta conserva mejor los aromas. Vida útil: unos 6-12 meses; si huele a rancio, toca rehacer.",
      "Con un buen macerado base abres un mundo: bálsamo con cera de abeja para labios y rozaduras, aceite de masaje con unas gotas de esencia, o un aceite corporal nutritivo para sobrevivir al invierno. En el herbolario preparamos kits con planta seca y botella oscura; y si te animas con la caléndula, siembra un tiesto en primavera: es de las flores más agradecidas que existen.",
    ],
  },
  {
    slug: "cultivar-plantas-medicinales-casa",
    title: "Cultiva tu pequeña farmacia: plantas medicinales que crecen en un tiesto",
    excerpt:
      "Menta, tomillo, albahaca, manzanilla y salvia: qué plantar en primavera, cómo cuidarlo y cómo cosechar para infusiones todo el año.",
    category: "Estilo de vida",
    date: "2027-04-13",
    minutes: 7,
    icon: Sprout,
    content: [
      "No necesitas huerto ni jardín: una ventana soleada basta para cultivar las plantas medicinales más útiles del día a día. Y hay algo profundamente reparador en ir del tiesto a la taza en diez segundos.",
      "Las cuatro infalibles para principiantes: menta (casi indestructible, perfecta para después de comer), hierbabuena (igual de fácil y más dulce), tomillo (antiséptico y aromático, va bien en cocina y en gárgaras) y romero (resistente, para asados y para un estimulante aceite macerado). Todas piden sol y poco riego; más de una mata se muere por exceso de agua que por sequía.",
      "Si te atreves con algo más: la manzanilla se siembra en primavera y sus flores se recogen nada más abrir; la salvia ama el sol y el sustrato que drene bien; y el áloe vera vive años en una maceta dentro de casa con poquísimo riego, siempre a mano para quemaduras solares y pequeños accidentes de cocina.",
      "Cosecha y guarda: corta por la mañana, cuando la planta está cargada de aromas, seca las ramitas colgadas boca abajo en un lugar oscuro y ventilado durante 1-2 semanas y guarda en frascos de vidrio opacos con nombre y fecha. En el herbolario puedes encontrar tierra, semillas y macetas; y si algo se te muere (pasa en las mejores casas), siempre hay una nueva temporada en primavera.",
    ],
  },
  {
    slug: "cambios-hormonales-apoyo-natural",
    title: "Cambios hormonales: apoyo natural en cada etapa (y cuándo pedir ayuda)",
    excerpt:
      "Regla, perimenopausia, menopausia: qué plantas y hábitos tienen respaldo, qué mitos dejar atrás y dónde está el límite de lo casero.",
    category: "Salud",
    date: "2027-05-11",
    minutes: 8,
    icon: Heart,
    content: [
      "Los ciclos hormonales marcan el cuerpo de muchas personas durante décadas, y con ellos llegan olas de síntomas: calores, cambios de ánimo, sueño roto, retención de líquidos. El apoyo natural razonable existe, pero conviene separarlo de la mitología de las hierbas milagro.",
      "Para el ciclo menstrual, lo más respaldado es sencillo: calor local en el bajo vientre (bolsa de semillas o ducha caliente) reduce el dolor con eficacia comparable a algunos analgésicos en estudios; el jengibre en infusión aparece en varios ensayos como aliviador de la dismenorrea; y el ejercicio moderado regular disminuye la intensidad de los cólicos a lo largo de los ciclos.",
      "En la perimenopausia y menopausia, las opciones con más recorrido son la salvia (con estudios en sofocos), el lúpulo y el trébol rojo (fitoestrógenos moderados), y los hábitos de fondo: fuerza muscular (el entrenamiento con pesas es de lo mejor para huesos, ánimo y sueño), vitamina D y calcio alimentario, y cuidado con el alcohol, que dispara los calores. Los extractos estandarizados de soja o cimicífuga se usan a veces, siempre con supervisión farmacéutica o médica.",
      "Y el límite de lo casero, claro y sin rodeos: sangrados muy abundantes o irregulares persistentes, dolor menstrual que no responde a nada y te impide vivir, síntomas que arruinan el sueño o el ánimo de forma sostenida, o cualquier duda con tratamientos hormonales: eso es ginecología, y las plantas se toman después de la visita, no en su lugar. Sobre todo si hay antecedentes de cáncer hormono-dependiente, nada de fitoestrógenos sin prescripción.",
    ],
  },
  {
    slug: "higiene-oral-natural",
    title: "Higiene oral natural: propóleo, salvia y una sonrisa sana",
    excerpt:
      "Cepillado correcto, seda dental y los apoyos del propóleo y la salvia: la rutina completa para una boca sana (y qué hábitos dañan el esmalte sin que te enteres).",
    category: "Salud",
    date: "2027-06-08",
    minutes: 6,
    icon: Smile,
    content: [
      "La boca es la entrada del cuerpo y su equilibrio depende de pocos gestos repetidos: cepillado de dos minutos, dos veces al día, con técnica de barrido suave hacia la encía; seda o cepillo interdental una vez al día (hay más placa entre dientes que en la superficie visible), y revisiones anuales.",
      "Del herbolario llegan aliados clásicos: el propóleo, con actividad antibacteriana estudiada, aparece en colutorios y pastas naturales y es útil como apoyo puntual en irritaciones de encía; la salvia y el tomillo en infusión templada sirven de enjuague tradicional para llagas y aftas; y el enjuague de clorofila o de aceite de coco («oil pulling») son tradiciones que a lo sumo refrescan, nada más.",
      "Cuidado con los enemigos disfrazados: el cepillado inmediatamente tras comer ácidos (cítricos, refrescos, vino) desgasta el esmalte recién ablandado, espera 30 minutos; los colutorios con alcohol resecan; y cepillar con fuerza «para eliminar el sarro» solo provoca recesión de encía. El agua con gas, además, es ácida: mejor compañera de comidas que de constantes sorbos.",
      "Lo que ninguna hierba arregla: caries (el agujero no se cierra solo), sarro consolidado (se quita con limpieza profesional) y sangrado de encías persistentes, que merecen visita. El hilo dental y la visita anual valen más que cualquier enjuague del mundo; el propóleo y la salvia son el adorno, no el pastel.",
    ],
  },
  {
    slug: "hidratacion-ola-calor-2027",
    title: "Hidrárate más allá del agua: sales, frutas y comidas frías para el verano",
    excerpt:
      "Por qué beber litros no basta en los días de calor extremo, qué electrolitos improvisar en casa y qué cocinar cuando no quieres encender el fuego.",
    category: "Prevención",
    date: "2027-07-13",
    minutes: 6,
    icon: Bath,
    content: [
      "En una ola de calor, sudar es el aire acondicionado del cuerpo, y con el sudor no solo se va agua: se van sodio, potasio, magnesio. Por eso se puede estar bebiendo litros y aun así sentir dolor de cabeza, calambres y pesadez: falta la parte mineral.",
      "La receta casera de bebida de calor: por cada litro de agua, una pizca generosa de sal (menos de lo que pondrías en una sopa), el zumo de medio limón o naranja y, si quieres, una cucharadita de miel. Alternativa igual de válida: agua de coco natural, que aporta potasio de forma natural. Y reparte a lo largo del día; el cuerpo absorbe mejor sorbos frecuentes que un litro de golpe.",
      "Comida de ola: menos cocina, más montaje. Gazpacho y salmorejo (vegetales, agua y sal en un vaso), ensaladas con legumbre o atún, fruta cortada siempre a mano en la nevera, pepino, sandía y melón como postre y snack. Cocina de noche o en microondas; y si sales a hacer deporte no sigas tu ritmo de abril: sal antes del sol o espera el fresco.",
      "Y las señales que no se ignoran: calambres repetidos, orina muy oscura con poca cantidad, mareo al levantarse y dolor de cabeza que no cede; ya no es «tomar un vaso de agua», es hidratación con sales y sombra. Confusión, piel caliente y seca o vómitos persistentes: urgencias, sin esperar. El calor extremo mata más personas de las que cree la intuición, sobre todo mayores.",
    ],
  },
  {
    slug: "conservar-hierbas-todo-el-ano",
    title: "Secar y conservar hierbas: tu despensa aromática para todo el año",
    excerpt:
      "Ramitas colgadas, congeladas en aceite y en sal: cómo alargar el verano del huerto en la alacena, con técnicas de abuela y trucos de hoy.",
    category: "Consejos",
    date: "2027-08-10",
    minutes: 5,
    icon: BookOpen,
    content: [
      "Con que agosto sea generoso, puedes tener albahaca, tomillo y romero hasta la navidad. Secar hierbas no requiere deshidratador: requiere oscuridad, aire y un mínimo de organización.",
      "Secado clásico: lava apenas las ramitas (o mejor, ni las laves: corta limpio), sécalas con cuidado y forma ramos pequeños colgados boca abajo en un lugar oscuro, seco y ventilado durante 1-2 semanas. Hojas tiernas como albahaca o menta van mejor sobre una malla o papel en la bandeja del horno apagado con la puerta entreabierta unos días. Están listas cuando se desmenuzan al roce.",
      "Conservación: frascos de vidrio oscuros, herméticos, con etiqueta y fecha, lejos del calor de la cocina. Otra gran vía es el congelado: albahaca picada en cubiteras con aceite de oliva, jengibre rallado en porciones, y cebollino entero; descongelado conserva mejor el aroma que el secado en las hojas blandas.",
      "Trucos que funcionan y no acumulan: sal de hierbas (sal gruesa machacada en mortero con romero y tomillo; dura meses y sazona pan y patatas), mantequilla de hierbas congelada en rulo, y vinagres caseros con estragón o tomillo que además quedan preciosos en la alacena. La regla para todo: frascos limpios y secos; la humedad es el único enemigo real.",
    ],
  },
  {
    slug: "dolor-menstrual-calor-plantas",
    title: "Dolor menstrual: calor, plantas y cuándo pedir ayuda",
    excerpt:
      "Jengibre, calor local y movimiento para los cólicos de cada mes, y las señales que convierten un dolor normal en un motivo de consulta.",
    category: "Salud",
    date: "2027-09-14",
    minutes: 7,
    icon: Activity,
    content: [
      "El dolor menstrual es tan común que se ha normalizado el sufrirlo, y de ahí salen dos errores: aguantar en silencio y creer que «siempre es así». Un poco de dolor el primer día es habitual; un dolor que arruina dos días al mes, no lo es.",
      "Para el dolor de cada mes, el apoyo más efectivo es también el más barato: calor local en el bajo vientre o la zona lumbar (bolsa de semillas, ducha caliente), que relaja la musculatura uterina y tiene respaldo en estudios junto a antiinflamatorios. El jengibre en infusión aparece en varios ensayos como reductor del dolor; y el ejercicio suave, caminar o estiramientos, mejora el flujo y baja la intensidad.",
      "En el herbolario se acompañan el plan con cápsulas de aceite de onagra o prímula (tradición más que evidencia robusta), magnesio (útil si hay calambres o sueño roto) y té de hierbabuena para la pesadez asociada. El café en exceso y el alcohol tienden a empeorar los cólicos; la hinchazón premenstrual mejora con menos sal y más agua, que suena a contradicción pero no lo es.",
      "Ahora el punto serio: dolor que no cede con analgésicos, que te hace faltar a clase o al trabajo cada mes, que se acompaña de dolor con relaciones, o de flujo tan abundante que mancha cada hora, puede indicar endometriosis, adenomiosis o fibromas. Eso se diagnostica con profesional, y cuanto antes mejor: la endometriosis tarda de media años en diagnosticarse y el «aguanta, es normal» es en gran parte el culpable.",
    ],
  },
  {
    slug: "vista-cansada-pantallas",
    title: "Vista cansada de pantallas: 20-20-20, luz y gestos que descansan la mirada",
    excerpt:
      "Ojos secos, visión borrosa y dolor de cuello tras el trabajo: la rutina ocular completa, del parpadeo consciente a los apoyos del herbolario.",
    category: "Bienestar",
    date: "2027-10-12",
    minutes: 6,
    icon: Eye,
    content: [
      "La vista cansada (astenopia) no es una enfermedad: es la factura del día de pantalla, con sus síntomas típicos: ojos secos y rojos, visión borrosa que va y viene, sensación de arena, dolor de cabeza y cuello. Se corrige con hábitos, no con gotas milagro.",
      "La regla estrella es el 20-20-20: cada 20 minutos, mira algo a 20 pies (unos 6 metros) durante 20 segundos. Añade parpadeo consciente (ante pantallas parpadeamos la mitad de lo normal: cerrar y apretar un par de segundos, varias veces), la pantalla a la altura de la vista y a un brazo de distancia, y luz ambiente que no contraste brutalmente con la pantalla.",
      "Para el ojo seco, las lágrimas artificiales sin conservantes son la base; desde el herbolario se acompañan con compresas tibias de manzanilla bien colada sobre los ojos cerrados (relaja y ayuda a las glándulas de la grasa del párpado) y, desde dentro, omega 3 y buena hidratación, que influyen en la película lagrimal.",
      "Y lo que hay que llevar al oculista: visión borrosa que persiste, dolor ocular intenso, destellos o moscas volantes de aparición súbita, o visión doble. También conviene revisar la graduación si el trabajo es de pantalla: muchas vistas cansadas son en realidad graduaciones antiguas o pequeños astigmatismos sin corregir.",
    ],
  },
  {
    slug: "remedios-abuela-ciencia-mitos",
    title: "Remedios de abuela con base científica (y mitos que se van de la alacena)",
    excerpt:
      "Miel para la tos y vapor para la nariz: lo que la ciencia confirma; y lo del vinagre, la col y las cebollas: lo que era mejor no era del todo cierto.",
    category: "Consejos",
    date: "2027-11-09",
    minutes: 8,
    icon: Star,
    content: [
      "Los remedios de la abuela son una mina de sabiduría acumulada, pero como todo legado, mezclan oro con escoria. Hoy un recorrido por lo que la ciencia ha confirmado y lo que conviene jubilar con cariño.",
      "Confirmado con estudios: la miel mejora la tos nocturna (mejor que placebo en varios ensayos, nunca a menores de 1 año); el vapor —y las duchas calientes— alivian la congestión de forma temporal; el calor local alivia dolores menstruales y musculares; el aloe vera calma quemaduras solares leves; y el té de tomillo es antibacteriano en cultivo y un expectorante tradicional razonable.",
      "Mitad de verdad: la vitamina C no previene el catarro en la población general (solo parece ayudar a deportistas de resistencia), aunque puede acortarlo un poquito si se toma de forma habitual; la cebolla en la mesilla no absorbe virus (las «toxinas» no salen así), pero la sopa de cebolla sí consuela; y el vinagre para la garganta puede irritar más que ayudar.",
      "Fuera con honor: poner alcohol en la frente para bajar la fiebre (riesgo real de absorción, sobre todo en niños), hielo directo sobre lesiones extensas, mantequilla en quemaduras (empeora) y cualquier remedio que sustituya una visita médica necesaria. La abuela tenía razón en más de lo que parece, pero la herboristería moderna es la que sabe cuándo su remedio era amor, cuándo era ciencia y cuándo era ambas.",
    ],
  },
  {
    slug: "navidad-defensas-arriba",
    title: "Navidad con las defensas arriba: prevención de temporada sin magia",
    excerpt:
      "Del lavado de manos al zinc, pasando por la humedad y la ventilación: el plan de diciembre para que el catarro busque otra casa.",
    category: "Prevención",
    date: "2027-12-14",
    minutes: 6,
    icon: Pill,
    content: [
      "Diciembre junta los tres factores perfectos para el catarro: gente apiñada en interiores, aire seco de calefacción y agendas que quitan horas de sueño. La buena noticia es que casi todo se puede remediar desde casa.",
      "Lo más eficaz no es glamuroso: lavarse las manos de verdad (20 segundos, agua y jabón, no gotas rápidas), que es la medida con más evidencia contra infecciones respiratorias y de estómago; y ventilar diez minutos la casa cada día, que renueva el aire sin enfriar la casa por completo. Humidificar (40-60 %) protege la mucosa nasal, primera barrera del virus.",
      "Del herbolario de diciembre: propóleo y equinácea en apoyo al inicio de síntomas (ciclos cortos), zinc (su toma temprana puede acortar el resfriado según estudios, mejor con comida), infusión de jengibre-limón-miel para la garganta y vapor de eucalipto para la nariz. Y la vacuna de la gripe si te corresponde: no es el enemigo de los remedios naturales, es parte del mismo plan.",
      "Y cuida lo que sostiene todo: sueño, comida real y calor humano (que también respalda la literatura: la soledad se asocia a peor respuesta inmune). Si el catarro dura más de dos semanas, vuelve tras mejorar, o aparece fiebre alta con dificultad respiratoria, toca consulta. Las plantas acompañan; el cuerpo, con descanso y cariño, hace el trabajo pesado.",
    ],
  },

  // ─────────────────────────── 2028 ───────────────────────────
  {
    slug: "citricos-invierno-temporada",
    title: "Cítricos de invierno: la vitamina C que sale del frutero",
    excerpt:
      "Naranjas, mandarinas, limones y kiwis: qué aporta de verdad la vitamina C de la fruta de temporada y cómo sacarle todo el partido en cocina y mesa.",
    category: "Consejos",
    date: "2028-01-11",
    minutes: 5,
    icon: Apple,
    content: [
      "El invierno es la temporada más generosa del año en cítricos, y no es casualidad: la naturaleza trae vitamina C justo cuando más falta hace. Una mandarina aporta unos 30-40 mg de vitamina C (la necesidad diaria de un adulto ronda los 45-110 mg según edad y hábitos), así que dos o tres piezas de fruta cubren lo necesario sin abrir un solo bote de pastillas.",
      "Conviene la verdad de siempre: la vitamina C no evita los catarros en la población general, aunque tomarla de forma habitual puede acortar un poquito su duración. La buena noticia es que, además de vitamina C, la fruta entera trae fibra, agua, potasio y flavonoides, y el conjunto trabaja mejor que la molécula aislada en polvo.",
      "Para aprovecharla: el zumo se bebe recién hecho (la vitamina C se oxida con la luz y el aire, y a la media hora ya no es la misma), la piel del limón rallada suma aromas y compuestos interesantes a ensaladas y guisos, y el kiwi con cuchara es el postre express con más vitamina C por gramo de la frutería. Con la calefacción a tope, la fruta rica en agua también ayuda con la sequedad de garganta de enero.",
      "Un apunte de honestidad con los suplementos: dosis muy altas de vitamina C en polvo o efervescente no dan más defensas, pueden provocar diarrea y, en personas predispuestas, favorecer los cálculos renales. La frutera de enero no es solo más bonita que el bote: es literalmente más eficaz.",
    ],
  },
  {
    slug: "corazon-colesterol-omega3",
    title: "Corazón y colesterol: lo que pasa por la cocina (y por la nevera)",
    excerpt:
      "Aceite de oliva, pescado azul, avena y frutos secos: la alimentación con más evidencia para el corazón, y la línea exacta donde empieza el médico.",
    category: "Salud",
    date: "2028-02-08",
    minutes: 7,
    icon: Fish,
    content: [
      "El corazón se cuida sobre todo en la cocina y caminando, no en el estante de suplementos. La dieta mediterránea de toda la vida —aceite de oliva virgen extra, legumbres, verdura, fruta, frutos secos y pescado azul— sigue siendo la intervención con más evidencia para el colesterol, la tensión y el riesgo cardiovascular en general.",
      "Del herbolario y la despensa: el pescado azul (sardina, boquerón, caballa) es la fuente natural de omega 3 más asequible que existe, y con dos o tres raciones semanales cubre lo que prometen las cápsulas. La avena y la cebada aportan betaglucanos, una fibra soluble cuyos estudios muestran reducción del colesterol LDL. Un puñado de frutos secos al día, y el espino blanco —planta tradicional del corazón— como apoyo en tensión y palpitaciones leves, siempre con asesoramiento.",
      "Los otros tres pilares no se venden en frasco: moverse media hora la mayoría de los días, dejar el tabaco (la medida más eficaz que existe) y cuidar el sueño y el peso. El alcohol sube la tensión y el colesterol antes de que lo notes: menos copas, más agua.",
      "Y la línea que no se cruza: cifras de tensión o de colesterol por encima de lo normal son asunto del médico, con analítica, seguimiento y —cuando corresponde— medicación que salva vidas. La cocina y las plantas acompañan y mejoran el suelo; no sustituyen el tratamiento ni las revisiones. Con antecedentes familiares de infarto temprano, cuanto antes se mida, mejor.",
    ],
  },
  {
    slug: "verduras-silvestres-primavera",
    title: "Verduras silvestres: la primavera que se come",
    excerpt:
      "Diente de león, ortiga, acedera y bledos: cómo identificar, recoger y cocinar la huerta gratuita que florece en caminos y descampados cada primavera.",
    category: "Estilo de vida",
    date: "2028-03-14",
    minutes: 6,
    icon: Sprout,
    content: [
      "La primavera llena prados y caminos de verduras comestibles que la ciudad ha olvidado: diente de león, ortiga joven, acedera, bledo, llantén. Salir con una cesta y volver con guarnición es de lo más satisfactorio que ofrece la herboristería de campo, y es gratis.",
      "La regla número uno no es de cocina sino de cabeza: no se come nada que no se sepa identificar al cien por cien. Hay plantas comestibles que imitan a otras tóxicas en sus fases jóvenes. Empieza por tres o cuatro inconfundibles —el diente de león, con su roseta de hojas dentadas sin tallo hueco, y la ortiga, que no engaña a nadie— y aprende de la mano de alguien que ya salga con cesta.",
      "En la cocina, la ortiga se escalda diez segundos en agua hirviendo y deja de picar (tortilla, sopa o pesto después); el diente de león va crudo en ensalada cuando es joven, y con un remojo en agua fría se suaviza su amargor; la acedera da un punto ácido a los revueltos. Las hojas tiernas, antes de la floración, son siempre las mejores.",
      "Y la prudencia de siempre: no recojas en cunetas con herbicidas, junto a zonas de perros o al borde de carreteras, y lava todo con conciencia. En el herbolario tienes guías de campo para estudiar en la calma del invierno: equivocarse hoja en mano, con un maestro al lado, no en la frutería de internet.",
    ],
  },
  {
    slug: "articulaciones-curcuma-dolor-rodillas",
    title: "Rodillas y articulaciones: cúrcuma, colágeno y movimiento",
    excerpt:
      "Cuando la primavera invita a caminar y la rodilla protesta: qué tiene respaldo, qué es moda y cómo cuidar las articulaciones que nos cargan cada día.",
    category: "Salud",
    date: "2028-04-11",
    minutes: 7,
    icon: Bone,
    content: [
      "Con el buen tiempo regresan los paseos largos y, para muchas personas, un dolor conocido en rodillas y articulaciones. La primera foto honesta: la articulación se alimenta del movimiento (el cartílago no tiene sangre y se nutre al comprimirse y descomprimirse), así que «ahorrar rodilla» es casi siempre la peor recomendación. El primer remedio es moverse bien, no dejar de moverse.",
      "De lo que se estudia: la cúrcuma estandarizada con piperina (o en fórmulas de buena absorción) acumula ensayos que muestran reducción del dolor articular en artrosis leve o moderada, comparable a antiinflamatorios suaves y sin castigar el estómago. El colágeno hidrolizado tiene resultados mixtos pero prometedores en rodilla. El omega 3 suma, y el peso: cada kilo de menos quita cuatro de carga a la rodilla en cada paso.",
      "Los gestos de cada día cuentan tanto como el frasco: fortalecer muslo y glúteo (sentadillas suaves, subir escaleras), calzado con buena amortiguación, calor local para la rigidez de la mañana y frío si tras el esfuerzo se hincha. La infusión de jengibre acompaña bien dentro de una pauta antiinflamatoria de alimentación.",
      "Ahora la frontera: hinchazón intensa, bloqueos, sensación de que la rodilla cede o dolor que despierta de noche no es asunto de infusiones: es de consulta. La artrosis se estratifica (leve, moderada, severa) y cada nivel tiene su plan; la consulta define el terreno, y el movimiento, el peso y la fitoterapia juegan el partido dentro de él.",
    ],
  },
  {
    slug: "cafeina-cuanta-demasia",
    title: "Cafeína: cuánta es demasiada y a qué hora cerrar el grifo",
    excerpt:
      "Cuatro cafés son el límite del adulto sano y no todos los cafés pesan igual: mapa de la cafeína escondida y la hora exacta de la última taza.",
    category: "Bienestar",
    date: "2028-05-09",
    minutes: 6,
    icon: Coffee,
    content: [
      "El café no es un vicio que haya que abolir: es una herramienta con manual de instrucciones. La cafeína bloquea temporalmente los receptores de adenosina, la molécula que anuncia sueño, y de ahí el efecto alerta. El problema empieza cuando se usa para tapar sueño que el cuerpo pide de verdad: entonces la herramienta manda sobre el dueño.",
      "Las cifras de referencia: hasta 400 mg al día (unos cuatro espressos, dos cafés con leche grandes o tres o cuatro tés) se considera seguro para adultos sanos. Y la clave horaria: la cafeína tiene una vida media de 5-6 horas, así que el café de las 17:00 sigue circulando a medianoche. Si duermes mal, la última taza se pone antes de las 14-15 h; la diferencia se nota, y rápido.",
      "Cuenta la cafeína que no sabe a café: refrescos de cola, bebidas energéticas (una lata grande puede llevar el doble que un espresso), tés concentrados y polvos pre-entreno del gimnasio. Súmalo todo, no solo las tazas. Y de paso: el espresso tiene menos cafeína que la taza larga; lo que importa no es la intensidad del sabor sino el tamaño del vaso.",
      "Señales de exceso: palpitaciones, ansiedad, temblor fino, estómago revuelto y un sueño que baja en calidad aunque no en horas. La respuesta no es sufrir: es bajar. El té verde (su L-teanina suaviza la subida), el rooibos sin teína, el agua fría y un paseo de diez minutos despiertan sin acabar con el sueño. Y en embarazo el límite baja a 200 mg diarios: cuenta todo lo que lleva cafeína, no solo el café.",
    ],
  },
  {
    slug: "aire-casa-ventilacion-humedad",
    title: "El aire de tu casa: ventilar, humidificar y respirar mejor",
    excerpt:
      "Pasamos el 90 % del tiempo en interiores y el aire de casa suele empeorar el de la calle: ventilación cruzada, humedad del 40-60 % y fuentes ocultas.",
    category: "Prevención",
    date: "2028-06-13",
    minutes: 6,
    icon: Wind,
    content: [
      "Pasamos cerca del 90 % del tiempo en interiores, y el aire de una casa bien cerrada puede cargarse de más partículas y compuestos que la terraza de enfrente: cocina, calefacción, muebles, limpiadores y nosotros mismos. La buena noticia es que el remedio principal no cuesta dinero: se llama ventana.",
      "La ventilación cruzada (abrir ventanas opuestas) diez minutos, dos veces al día, renueva el aire casi por completo sin enfriar las paredes; en época respiratoria baja además la carga de virus en suspensión. Y un higrómetro de tres euros aclara la mitad de las dudas: la humedad ideal del hogar va del 40 al 60 %. Más favorece moho y ácaros; menos reseca mucosas, piel y garganta.",
      "Las fuentes ocultas del aire malo: velas e incienso quemados a diario, limpiadores y ambientadores con fragancias potentes, humo en interior y polvo acumulado en textiles y cartones. Las plantas de casa mejoran el ánimo y la sensación de fresco, pero su efecto purificador real es modesto: la ventilación sigue siendo la campeona.",
      "La alarma seria: manchas de humedad y moho crecientes, tos persistente que mejora al salir de casa, o síntomas que se van de viaje. Eso no es suciedad: es un problema de obra o de aislamiento que hay que atacar en la fuente (fugas, sellos, ropa secada dentro). Mientras se arregla, un purificador con filtro HEPA ayuda en las alergias, pero nunca sustituye la reparación.",
    ],
  },
  {
    slug: "dormir-noches-calor",
    title: "Dormir con calor: qué hacer cuando la noche no refresca",
    excerpt:
      "El cuerpo baja su temperatura para dormir y el calor lo impide: gestos de habitación, ducha templada, cena temprana y las hierbas que acompañan.",
    category: "Bienestar",
    date: "2028-07-11",
    minutes: 5,
    icon: Flame,
    content: [
      "Para dormir, el cuerpo necesita bajar su temperatura interna uno o dos grados: es la señal biológica de «estamos cerrando el día». Cuando la noche no baja de 25 °C ese sincronismo se rompe y aparece el sueño de parpadeo de ojos calientes. No es ruido mental: es termodinámica.",
      "Los gestos que funcionan: ducha templada (no fría) una hora antes de acostarse, que acelera luego la bajada de temperatura interna; sábanas de algodón y sin edredón; ventilador que mueva el aire sin dar de sopapo, con una botella de hielo delante si el calor aprieta; y la funda de la almohada pasó cinco minutos en la nevera, un placer que quien lo descubre ya no abandona.",
      "La cena y la copa pesan más de lo que crees: comer tarde y copioso calienta el cuerpo y fragmenta el sueño, y el alcohol, además de fragmentarlo, dilata los vasos y da calor. Una infusión templada de tila o melisa suma, y la siesta corta (20 minutos, antes de las 16 h) devuelve parte del descanso sin robar sueño a la noche.",
      "Sobre el aire acondicionado: 24-26 °C, sin corriente directa sobre la cama y con filtro limpio si hay alergia. Y la bandera roja: los sudores nocturnos que empapan la sábana sin explicación, sobre todo con pérdida de peso o fiebre, no son «el calor»: son motivo de consulta. La noche de verano se lleva con ingenio, pero los síntomas médicos no se disimulan.",
    ],
  },
  {
    slug: "picaduras-verano-primer-minuto",
    title: "Picaduras de verano: qué hacer en el primer minuto (y después)",
    excerpt:
      "Mosquitos, medusas, avispas y abejas: los gestos correctos del momento exacto, los remedios del herbolario y las señales que saltan a urgencias.",
    category: "Remedios",
    date: "2028-08-08",
    minutes: 6,
    icon: Waves,
    content: [
      "El verano nos cruza con insectos y criaturas marinas, y lo que se hace en el primer minuto decide si la noche será tranquila o un drama de rascado. La secuencia universal: lavar con agua y jabón, aplicar frío local 10-15 minutos y no rascar (el rascado convierte cualquier picadura en una infección de segunda ronda).",
      "Guía por especies: al mosquito, frío, gel de árbol de té diluido o calamina para el picor, y un antihistamínico oral si el picor desvela la noche. A la medusa, agua de mar (nunca dulce: el cambio de salinidad dispara las células venenosas restantes), frío envuelto y quitar restos con pinza o borde de tarjeta, sin frotar con arena. A la abeja, retirar el aguijón cuanto antes raspando con tarjeta o uña; la avispa no deja aguijón, pero pica más veces.",
      "Del herbolario: la caléndula y el aloe calman la piel irritada, la arcilla en pasta reduce el picor por efecto frío, y el árnica va genial en golpes y morados (no sobre heridas abiertas). Para prevenir mosquitos, los repelentes con citriodiol (de eucalipto limón) o icaridina son los que funcionan de verdad; las pulseras anti-mosquito son decorativas.",
      "Y la llamada que no admite espera: dificultad para respirar, hinchazón de labios o lengua, urticaria generalizada, mareo o vómitos tras una picadura señalan anafilaxia, una urgencia que se trata con adrenalina, no con hielo. Quien ya tuvo una reacción fuerte merece un plan de emergencia con alergólogo y auto-inyector; con eso no se improvisa.",
    ],
  },
  {
    slug: "fermentados-caseros-kefir",
    title: "Fermentados caseros: kéfir, chucrut y kombucha sin sustos",
    excerpt:
      "Probióticos vivos que se hacen en la nevera: tres fermentos fáciles para empezar, las reglas de higiene que evitan sustos y cómo introducirlos poco a poco.",
    category: "Consejos",
    date: "2028-09-12",
    minutes: 7,
    icon: FlaskConical,
    content: [
      "Los fermentados son probióticos vivos hechos en casa: kéfir de leche, chucrut y kimchi, kombucha, yogur. Por precio, sabor y microbiota, son la opción más económica que existe para sostener la salud intestinal, esa que aloja buena parte del sistema inmune.",
      "Para empezar, el kéfir de leche es el más misericordioso: granos en un frasco de vidrio, leche por encima, tapado con tela y 24-48 horas de espera; se cuela, se bebe y los granos vuelven a la carga. El kéfir de agua va con agua azucarada y fruta seca; el chucrut es solo col con sal (frasco, sal al 2 %, apretar con el puño hasta que brote el jugo, peso encima y tres o cuatro semanas de espera).",
      "Las reglas de seguridad son pocas y sagradas: frascos y cucharas limpios sin restos de jabón, sin metales en contacto directo con el cultivo, y confianza en la nariz —un fermento sano huele a ácido fresco; el moho vistoso, los olores pútridos o las texturas raras se tiran sin intentar rescatar—. Y para empezar a comerlo: una cucharada diaria y subir de uno en uno; el exceso de fermentado se paga en gases que asustan sin motivo.",
      "La nota seria: en personas con inmunidad debilitada (quimioterapia, trasplantes, tratamientos inmunosupresores) o catéteres, los fermentados caseros pasan antes por consulta, porque sus microbios vivos son el objetivo pero también el riesgo en esos casos. Para el resto: un poco de chucrut con la cena, un vaso de kéfir con el desayuno y regularidad; la microbiota se cuida con variedad y constancia, no con heroísmo de fin de semana.",
    ],
  },
  {
    slug: "espalda-mochilas-escritorio",
    title: "Espaldas de septiembre: mochilas, escritorios y core",
    excerpt:
      "Ocho de cada diez personas tendrá lumbalgia alguna vez: la mochila bien cargada, el puesto de silla y el core que sostiene la espalda todos los días.",
    category: "Salud",
    date: "2028-10-10",
    minutes: 6,
    icon: Dumbbell,
    content: [
      "Septiembre pega dos golpes a la espalda: la mochila escolar, que llega cargada a más no poder, y la vuelta al escritorio tras semanas de sillas acolchadas de terraza. Ocho de cada diez personas tendrán lumbalgia alguna vez en la vida; la buena noticia es que la espalda se defiende con hábitos, no con reposo.",
      "La mochila no debe pesar más del 10-15 % del cuerpo del niño, con las dos asas puestas y ajustadas y lo pesado pegado a la espalda; si la escuela lo permite, el trolley es la mejor inversión del curso. En el escritorio: pantalla a la altura de los ojos, pies al suelo, apoyo lumbar y levantarse un minuto cada hora. La silla mágica no existe: la postura se corrige cambiando de postura, no soldándose a una.",
      "El core —abdomen, espalda baja, pelvis y glúteos— es el cinturón natural del raquis y se entrena: natación, pilates, planchas y sentadillas técnicas, tres días por semana, hacen más que cualquier fármaco preventivo. Para las contracturas del día: calor local, masaje suave, gel de árnica, y un colchón que acompañe, porque buena parte de la espalda de la mañana se fabrica de noche.",
      "Las banderas rojas que mandan a consulta: dolor que baja por la pierna más allá de la rodilla (ciática), pérdida de fuerza o de sensibilidad, alteraciones de esfínteres o dolor que no duerme en ninguna postura. Para el resto, el reposo absoluto en cama se jubiló hace décadas como tratamiento: quien se mueve pronto se recupera antes y convierte el episodio en episodio, no en crónico.",
    ],
  },
  {
    slug: "caida-pelo-otono",
    title: "Caída de pelo de otoño: qué es normal y qué se investiga",
    excerpt:
      "Ferritina, tiroides, zinc y estrés: cuándo la caída de pelo pasa de temporal a motivo de análisis, y qué apoyos tienen algún respaldo real.",
    category: "Salud",
    date: "2028-11-14",
    minutes: 6,
    icon: Scissors,
    content: [
      "Cada otoño el pelo se despega más: el sol y los baños del verano sincronizan folículos en la misma fase, y tres o cuatro meses después (octubre, noviembre) el desprendimiento se dispara. Perder entre 50 y 100 pelos al día —hasta 150 en esta estación— es fisiología, no alarma.",
      "La caída que se investiga es otra: difusa, sostenida más de tres meses, o con otras señales como cansancio, palidez o uñas frágiles. El panel de análisis que más rinde: ferritina (reservas de hierro; un valor «normal» puede seguir siendo poco para el pelo), TSH de tiroides, zinc y vitamina D. Y el historial importa: dietas restrictivas, infecciones víricas fuertes, partos y episodios de estrés presentan su factura en el pelo exactamente tres meses después.",
      "Lo que apoya mientras: proteína suficiente en cada comida (el pelo es una fábrica de queratina que sufre cuando se come poco), higiene suave (sin frotar mojado ni planchas al máximo), champús delicados y enjuagues de romero o ortiga, que son más tradición que evidencia pero no hacen daño. Las píldoras «anticaída» de estantería suelen ser mezclas sin dosis útiles: mejor invertir en un análisis.",
      "La línea de consulta a dermatología: calvicie de patrón (entradas o corona que se marcan), parches redondos sin pelo (alopecia areata) o caída brusca en pocas semanas. Androgenética y areata se tratan mejor cuanto antes se detectan, y aquí sí hay tratamientos de eficacia demostrada: el pelo no se pierde por timidez, se pierde por retraso.",
    ],
  },
  {
    slug: "regalos-navidad-naturales",
    title: "Regalos de navidad con sentido: tisanas, macerados y detalles que se usan",
    excerpt:
      "Cero polvo tras el vidrio: ideas de regalo del herbolario que se gastan, se usan y se repiten, con etiquetas hechas a mano y fecha de elaboración.",
    category: "Estilo de vida",
    date: "2028-12-12",
    minutes: 5,
    icon: Gift,
    content: [
      "El peor regalo natural es el que acaba detrás de un vidrio sin tocarse nunca: cajas ceremoniales y objetos «de bienestar» que nadie se atreve a usar. El mejor es el que se consume, se gasta y pide repetición: los aceites se agotan, las tisanas se beben, los jabones se deshacen. Esa es la etiqueta de oro del regalo del herbolario.",
      "Ideas que funcionan año tras año: cofres de tisanas de temporada (una nocturna, una digestiva, una de ánimo con cítricos), aceites macerados caseros con etiqueta escrita y fecha —caléndula para pieles sensibles, lavanda para las noches tensas—, jabones artesanos de confianza, una bomba de baño para las noches de diciembre y un kit de siembra (manzanilla y menta en tiestos) para los impacientes de primavera.",
      "La etiqueta lo cambia todo: nombre del destinatario, fecha de elaboración y una línea de uso sugerido («dos gotas en el masaje post-ducha», «la taza de las 23:00») convierten el objeto en una recomendación. Y se adapta a cada persona: al que corre, un bálsamo muscular; a quien cocina, sal de hierbas y vinagres aromatizados; a quien lee de noche, la infusión con tila y melisa.",
      "Dos límites de estilo: nada de promesas curativas en el regalo (el presente es cariño y experiencia, no tratamiento) y nada de envoltorios de charlatán. Un tarro de cristal, una tela y un cordón convierten cualquier cosa en presente —y ponerle fecha de elaboración a lo natural lo hace más valioso, no menos, porque caduca de verdad.",
    ],
  },

  // ─────────────────────────── 2029 ───────────────────────────
  {
    slug: "habito-caminar-pasos",
    title: "El hábito de caminar: 8.000 pasos más realistas que 10.000",
    excerpt:
      "Caminar es el ejercicio más infraestimado que existe: cómo arrancar, cómo mantenerlo y por qué el número mágico nació en una campaña comercial.",
    category: "Estilo de vida",
    date: "2029-01-09",
    minutes: 5,
    icon: Footprints,
    content: [
      "Caminar es el ejercicio más infraestimado del mundo: gratuito, social, amable con las articulaciones y adaptable a cualquier edad, y con una de las evidencias más consistentes en salud cardiovascular, ánimo y longevidad. El famoso 10.000 nació de una campaña de marketing japonesa de los años 60; los estudios actuales sitúan la mayor parte del beneficio entre los 7.000 y los 8.000 pasos.",
      "La clave del hábito no es la motivación, es el anclaje: engancha diez minutos a una rutina ya existente (el café de la mañana = paseo de diez minutos; la llamada a la madre = paseo con auricular), deja los zapatos cómodos junto a la puerta la noche anterior y pon un objetivo mínimo ridículo («salir a la calle») que se cumpla incluso el día malo. La constancia le gana siempre a la intensidad.",
      "Para subir el aprovechamiento sin material: añade cuestas, sube el ritmo hasta «puedo hablar pero no cantar» (esa zona genera el grueso de las mejoras), prueba el paseo tras la comida principal —la glucosa baja de forma notable con diez minutos de pasos tras comer— y hazlo en compañía o con podcast: el tiempo se vuela.",
      "La sensatez de siempre: si al caminar aparece dolor de pecho, mareo o falta de aire fuera de proporción con el esfuerzo, esa conversación va con el médico antes que con el podómetro. Con diabetes o problemas de pie, calzado adecuado y revisar los pies tras cada paseo forma parte del plan. La longevidad no corre: camina.",
    ],
  },
  {
    slug: "azucar-oculta-etiquetas",
    title: "Azúcar oculta: cómo leer etiquetas sin llevar calculadora",
    excerpt:
      "Buena parte del azúcar que comemos viene de donde no se busca —salsas, pan, lácteos azucarados—: cómo leer etiquetas y bajar el dulce sin morir de aburrimiento.",
    category: "Consejos",
    date: "2029-02-13",
    minutes: 7,
    icon: Candy,
    content: [
      "El azúcar del café es decorado: la mayor parte de la que comemos llega escondida en salsas de tomate, pan de molde, lácteos azucarados, platos precocinados, sopas de sobre y hasta conservas vegetales. La OMS recomienda que los azúcares libres no superen el 10 % de las calorías (idealmente el 5 %); España va por encima del doble.",
      "Leer bien una etiqueta son dos gestos: primero, mirar los «azúcares» por 100 g (más de 22 g es alto; menos de 5 g, bajo, en la escala de etiquetado europeo); segundo, cazar el azúcar disfrazado en la lista de ingredientes —dextrosa, jarabe de glucosa-fructosa, melaza, miel, sirope de agave, zumo concentrado, maltodextrina—. Si esos nombres encabezan un producto que no sabe a dulce, ya sabes de dónde vienen los gramos.",
      "La sustitución que respeta el placer: yogur natural con fruta troceada en lugar de yogur de sabores, chocolate por encima del 70 %, fruta entera de postre y especias —canela, cardamomo, vainilla— que endulzan la percepción sin azúcar. Y el truco del recalibrado: dos semanas bajando el dulce y una manzana vuelve a saber a postre; el paladar se reajusta de verdad.",
      "Sin inquisiciones: el postre del domingo sigue siendo sagrado y el brownie ocasional es cultura, no pecado. Lo que se corrige es el patrón de la semana, no el bocado del martes. Y si hay diabetes, prediabetes o síndrome metabólico, cualquier plan de reducción se hace con el equipo sanitario: en esos casos la medicación puede necesitar ajuste según baja el azúcar.",
    ],
  },
  {
    slug: "salud-intima-microbiota",
    title: "Salud íntima: microbiota, gestos que respetan y mitos que irritan",
    excerpt:
      "El equilibrio de la microbiota vulvovaginal y sus lactobacilos: qué hábitos lo respetan, qué productos lo estropean y dónde está el límite de la consulta.",
    category: "Salud",
    date: "2029-03-13",
    minutes: 7,
    icon: Shell,
    content: [
      "La vagina se cuida sola: su mucosa está colonizada por lactobacilos que mantienen un pH ácido que frena a los intrusos. El objetivo de cualquier cuidado íntimo no es asepsia sino respeto: casi todos los productos de estantería para la zona íntima venden más estorbo que ayuda.",
      "Los gestos que respetan: agua y, como mucho, un gel suave de pH específico en la zona externa (vulva); nada de jabones perfumados ni de lavados internos —las duchas vaginales no limpian: desmontan las defensas naturales y se asocian a más infecciones—; ropa interior de algodón y sin apretujones, sin que el bañador mojado se pegue más de lo necesario, y compresas cambiadas con frecuencia, preferiblemente sin aroma.",
      "De lo que hay evidencia: los probióticos orales con cepas concretas de lactobacilos muestran beneficio moderado en vaginosis de repetición, y el arándano rojo (proantocianidinas) apoya la prevención de la cistitis de repetición, como complemento que ningún episodio agudo sustituye. Lo que sobra: vinagres, bicarbonato, permanganato y «limpiezas» caseras de cualquier tipo; irritan más que corrigen.",
      "La cabeza fría: picor, olor nuevo, flujo que cambia de aspecto, dolor al orinar o sangrado fuera de regla son motivo de diagnóstico, no de autoprescripción —la crema «de todo» confunde el cuadro y retrasa el tratamiento correcto—. Más de dos episodios al año merecen estudio ginecológico: no es mala suerte, suele tener solución bien encaminada por un profesional.",
    ],
  },
  {
    slug: "jabones-naturales-caseros",
    title: "Jabones artesanos en casa: saponificación con seguridad",
    excerpt:
      "Sosa cáustica, grasas y paciencia: la receta base del jabón casero con las reglas de seguridad que no se negocian, y los añadidos que lo hacen precioso.",
    category: "Cosmética",
    date: "2029-04-10",
    minutes: 6,
    icon: Palette,
    content: [
      "Hacer jabón en casa es química de verdad: grasas más sosa cáustica en agua producen la saponificación que convierte aceites en jabón y glicerina, la molécula hidratante que los procesos industriales suelen extraer. Es un taller de domingo muy satisfactorio… con reglas de seguridad que no se negocian.",
      "Las reglas: guantes y gafas siempre (la sosa fresca quema piel y ojos), la sosa se añade AL agua y nunca al revés (la inversión provoca una reacción violenta), en un espacio ventilado, con utensilios exclusivos que no vuelvan a la cocina y fuera del alcance de niños y mascotas. La mezcla alcanza por sí sola los 70-80 °C: la reacción genera calor, y conviene saberlo antes de empezar.",
      "La receta base amable: aceite de oliva para la suavidad y la duración, aceite de coco para la espuma, manteca de karité para la cremosidad —con proporciones calculadas en una calculadora de saponificación fiable, que cuadra el exceso de grasa—. Se vierte en moldes, se deja cubierto 24-48 horas y luego viene lo importante: el curado de 4-6 semanas en lugar seco y ventilado. Añadidos de armario: avena coloidal para pieles sensibles, pétalos secos y aceite esencial en la traza.",
      "La honestidad final: el jabón artesano lava bien, pero no desinfecta más que cualquier jabón de farmacia —la limpieza de manos se juega en frotar bien los veinte segundos, no en la etiqueta—; y quien quiera vender lo que fabrica necesita registro sanitario, no solo moldes bonitos. Para el baño de casa y para regalar con etiqueta escrita: puro oro.",
    ],
  },
  {
    slug: "plantas-medicamentos-interacciones",
    title: "Plantas y medicamentos: interacciones que conviene conocer",
    excerpt:
      "«Natural» no significa «inofensivo»: hipérico, regaliz, ginkgo, pomelo y demás cruces entre la fitoterapia y la farmacología que conviene conocer.",
    category: "Prevención",
    date: "2029-05-08",
    minutes: 8,
    icon: Pill,
    content: [
      "«Natural» no significa «inofensivo»: las plantas contienen moléculas activas que el hígado procesa con las mismas enzimas con las que procesa los medicamentos, y cuando ambas pasan por el mismo carril, alguien sale empujado. Las interacciones planta-fármaco están documentadas y algunas tienen consecuencias serias; conocer las principales es cultura básica de salud.",
      "Los protagonistas: el hipérico (hierba de San Juan) acelera el metabolismo hepático y reduce la eficacia de anticonceptivos, anticoagulantes, inmunosupresores y varios antidepresivos —una de las interacciones más peligrosas del estante—. El regaliz prolongado en dosis altas sube la tensión y baja el potasio (cuidado con diuréticos y con el corazón). El ginkgo suma riesgo de sangrado con anticoagulantes o antiagregantes. Y el pomelo interfiere con estatinas y más fármacos: no es planta, pero gana en la misma lista; revisa el prospecto.",
      "Las reglas prácticas del herbolario serio: antes de combinar, consulta al farmacéutico con la lista completa de lo que tomas; separa la fibra y el carbón activado de la medicación (interfieren su absorción); prefiere ciclos cortos a consumo perpetuo; y si notas que el efecto de tu fármaco cambia —más efectos de los esperados, o simplemente que ya no hace su trabajo—, sospecha del estante con la misma facilidad que del bote.",
      "Y una nota que salva vidas en el quirófano: dos semanas antes de una operación, informa al cirujano y al anestesista de todos los suplementos y plantas que tomas —ginkgo, ajo, jengibre, dosis altas de omega 3 entre otros, pueden alterar la coagulación— y sigue sus instrucciones de suspensión. La fitoterapia merece estar anotada en la lista de lo que tomas, no en la lista de lo que no cuenta.",
    ],
  },
  {
    slug: "pies-verano-hongos",
    title: "Pies de verano: hongos, callos y sandalias que perdonan",
    excerpt:
      "El calor y las piscinas son la temporada del pie de atleta: prevención diaria, el error clásico de abandonar el tratamiento a medias y los pies que piden más cuidado.",
    category: "Remedios",
    date: "2029-06-12",
    minutes: 5,
    icon: Footprints,
    content: [
      "El calor, la humedad de la piscina y los vestuarios compartidos son las condiciones perfectas del pie de atleta y del hongo en uñas. La buena noticia: la prevención es lista corta y la cura, si se hace completa, también.",
      "Los gestos que previenen: secar los pies de verdad tras la ducha, sobre todo entre los dedos, que es donde se asienta el hongo; sandalias de goma en vestuarios y bordes de piscina; calcetines que transpiran, cambiados a diario; y calzado que respire —dos pares que se alternan secan por dentro, un solo par acumula la humedad del día anterior—.",
      "Si aparece picor, descamación o grietas entre los dedos: cremas antimicóticas de farmacia aplicadas con esmero dos veces al día, extendidas también unos centímetros sobre la piel sana, y continuando semanas después de que la piel luzca bien. Abandonar cuando desaparece el picor es la causa número uno de recaídas. En uñas el tratamiento es más largo y merece diagnóstico antes de empezar.",
      "Un nivel de cuidado extra: con diabetes, cualquier grieta, herida o cambio de color en el pie es motivo de consulta rápida —la piel diabética cicatriza peor y las infecciones avanzan más rápido—; lo mismo con problemas de circulación. Y los callos dolorosos que cambian la forma de andar van al podólogo, no al bisturí casero.",
    ],
  },
  {
    slug: "embarazo-lactancia-plantas",
    title: "Embarazo y lactancia: qué plantas se pueden y cuáles no",
    excerpt:
      "Lo que atraviesa la placenta llega al bebé; lo que pasa a la leche, al recién nacido: la ventana del herbolario se estrecha, y conviene saber por qué (y con quién consultar).",
    category: "Salud",
    date: "2029-07-10",
    minutes: 7,
    icon: Baby,
    content: [
      "El embarazo estrecha la ventana del herbolario: lo que atraviesa la placenta llega al bebé, y muchas plantas seguras cuando no hay embarazo dejan de serlo. La regla no es miedo, es criterio: en los nueve meses, cualquier hierba se toma con más cabeza que de costumbre.",
              "Lo que se evita sin discusión: los aceites esenciales por vía interna (en embarazo, ninguno), los emenagogos y purgantes que estimulan contracciones (ruda, ajenjo, sabina, cohosh) y cualquier suplemento con promesas milagrosas —adelgazantes, «energía total», limpias—. También caen: el café por encima de 200 mg de cafeína diarios y las infusiones «fuertes» en dosis diarias altas.",
      "Lo razonable, con respaldo: el jengibre en infusión o cápsula acumula estudios que muestran reducción de las náuseas del primer trimestre; la manzanilla puntual no da problemas; y los complementos con base clara —ácido fólico, vitamina D, hierro cuando el análisis lo pida— los decide la matrona o el médico, no el estante.",
      "La lactancia también cuenta: muchas moléculas pasan a la leche y otras reducen su producción (la menta y la salvia en dosis altas son las clásicas que la bajan). Y un gesto que vale por sí solo: escribir la lista de todo lo que tomas —cada hierba, suplemento y aceite— y llevarla a la consulta o a la farmacia. En embarazo, la fitoterapia se practica siempre a dos manos: la del herbolario y la del profesional que lleva el embarazo.",
    ],
  },
  {
    slug: "jet-lag-viajes-largos",
    title: "Jet lag: cómo engañar al reloj en viajes largos",
    excerpt:
      "El cuerpo se ajusta a un día por cada hora de desfase: qué hacer antes, durante y después del vuelo para llegar despierto y volver a dormir de noche.",
    category: "Consejos",
    date: "2029-08-14",
    minutes: 6,
    icon: Plane,
    content: [
      "El jet lag no es cansancio de vuelo: es tu reloj interno en otra zona horaria, y el cuerpo se ajusta aproximadamente a razón de un día por cada hora de desfase. Cruzar seis husos equivale a casi una semana desajustada, y por eso el viaje se planifica desde antes del vuelo, no desde el avión.",
      "Antes: si viajas hacia el este, adelanta la hora de dormir y de cena 30-60 minutos por día durante los dos o tres días previos; hacia el oeste, retrasa con la misma lógica. Durante el vuelo: agua con regularidad (el aire de cabina reseca de verdad), poco alcohol (empeora a la vez el sueño y la hidratación) y dormir solo si en el destino es de noche —tapones y antifaz ayudan—.",
      "Al aterrizar, lo primero: alinear de inmediato comidas y sueño con la hora local. La luz es el mando del reloj: la luz matinal del destino lo adelanta y la de la tarde lo retrasa, así que busca la mañana del destino aunque cueste abrir los ojos. La siesta del primer día se permite corta (20-30 minutos, antes de las 16 h); más larga, y robará la noche.",
      "La melatonina a dosis bajas (0,5-1 mg) a la hora local de dormir puede ayudar en viajes largos y con corrección profesional; los remedios «anti-jet-lag» del aeropuerto, casi nunca. Con hidratación, luz a la hora correcta y comidas alineadas, la mayoría se ajusta en tres o cuatro días; si después de dos semanas el desajuste sigue, ya no es jet lag y va a consulta.",
    ],
  },
  {
    slug: "recuperacion-muscular-agujetas",
    title: "Agujetas y recuperación: lo que funciona tras el ejercicio",
    excerpt:
      "No es ácido láctico acumulado (ese mito lleva décadas refutado): qué pasa en el músculo, qué alivia de verdad y cuándo el dolor es lesión.",
    category: "Bienestar",
    date: "2029-09-11",
    minutes: 6,
    icon: Dumbbell,
    content: [
      "Las agujetas —el dolor difuso que aparece 24-72 horas tras el esfuerzo, con nombre técnico DDOM— no vienen del «ácido láctico acumulado»: ese mito lleva décadas refutado y el lactato se limpia en pocas horas. Lo real son microlesiones de las fibras musculares, típicas cuando el cuerpo hace algo nuevo, más largo o excéntrico (bajar escaleras, sentadillas) o vuelve a entrenar tras semanas de pausa.",
      "Lo que funciona de verdad: seguir moviéndose —caminar, pedalear sin carga—, porque el movimiento suave bombea sangre al músculo y acelera la recuperación (el reposo absoluto se jubiló en la literatura hace décadas); dormir bien, que es donde de verdad crece y repara el músculo; y comer proteína suficiente repartida en el día. La vuelta al ejercicio se hace con progresión: salto de intensidad brusco = agujetas seguras.",
      "Lo que alivia (sensación más que milagro, pero vale): el frío en las primeras horas baja la percepción del dolor, el calor desde el segundo día relaja, y el masaje suave o el rodillo —sin torturarse— facilitan; el magnesio solo suma si hay déficit real (calambres, sueño roto), no como cura automática de agujetas.",
      "Las señales que no son agujetas: dolor localizado y punzante en un punto (tirón o rotura parcial), hinchazón marcada a un solo lado, dolor que impide apoyar o doblar la articulación, o que sigue igual una semana después. Y una urgencia médica absoluta: orina oscura o marrón tras un esfuerzo extremo puede señalar rabdomiólisis, y se va al hospital sin esperar.",
    ],
  },
  {
    slug: "tisanas-guia-por-horas",
    title: "Tisanas por horas: qué tomar según la hora del día",
    excerpt:
      "Cada planta tiene su hora: estimulantes de mañana, digestivas tras comer y relajantes de noche. La guía del herbolario para elegir la infusión correcta.",
    category: "Consejos",
    date: "2029-10-09",
    minutes: 6,
    icon: GlassWater,
    content: [
      "«Tomar una infusión» no es un monolito: cada planta tiene su momento del día según lo que aporta, y la misma taza que despierta a las ocho puede robar sueño a las diez de la noche. Esta es la guía del herbolario, planta por hora.",
      "Por la mañana, donde habitualmente está el café: té negro o verde si buscas estímulo (el verde, con su L-teanina, sube más suave), jengibre con limón si el desayuno trabaja el estómago, y menta o romero para el despertar de media mañana. Entre comidas, rooibos: sin teína, con cuerpo, y se bebe a cualquier hora sin tocar el sueño.",
      "Después de comer, las digestivas: hinojo contra la hinchazón y los gases, hierbabuena para refrescar el estómago (evitada si hay reflujo frecuente), manzanilla si el estómago se ha irritado, y los amargos —diente de león, boldo— media hora antes de las comidas copiosas, para que la bilis entre en escena a tiempo.",
      "De noche, las relajantes: tila para el bajón del día, melisa si el insomnio viene acompañado de nervios, valeriana en las noches rebeldes, y la lavanda mejor en el difusor y el baño que en la taza. Dos reglas del oficio: las tisanas se toman recién infundidas, tapadas mientras reposan cinco o diez minutos para que los aromas no se escapen, y la infusión eterna en la tetera pierde lo bueno: cada planta tiene su hora.",
    ],
  },
  {
    slug: "cocina-cuchara-invierno",
    title: "Cocina de cuchara: caldos y potajes con fondo de verdad",
    excerpt:
      "Con el frío vuelve la cuchara: caldos caseros, legumbres y verduras de temporada, con los trucos que convierten el potaje en un remedio (sin sobrar de sal).",
    category: "Bienestar",
    date: "2029-11-13",
    minutes: 6,
    icon: Soup,
    content: [
      "Con el frío vuelve la cocina de cuchara, y hace bien: el caldo caliente hidrata, calma la garganta congestionada y sostiene mejor que cualquier paquete. La cocina de cuchara no es nostalgia: es de la comida más coherente con el invierno.",
      "El fondo casero es la inversión de cinco minutos que rinde toda la semana: huesos o verduras al agua con puerro, zanahoria y apio, y dos horas de fuego lento; se congela en porciones y da profundidad a sopas, arroces y guisos. Las legumbres dos o tres veces por semana aportan fibra, proteína y saciedad a precio que ninguna otra cosa iguala; garbanzos, lentejas y alubias no entienden de moda.",
      "Verdura de temporada que no falla: nabo, puerro, calabaza, espinaca, repollo y acelga, con especias —pimentón, comino, cúrcuma con pimienta negra— que dan cuerpo sin grasa. Y el sofrito con aceite de oliva cuesta más atención pero transforma: el potaje de la abuela no era «grasoso», era de sofrito lento.",
      "Los límites gastronómicos: los caldos de brick llevan mucha más sal de la que parece (añade agua y verdura fresca antes que sal), y el potaje no necesita embutido para saber a diciembre. Con tensión alta o problemas renales, la sal y el potasio se vigilan de cerca y el potaje se adapta con el profesional que toca. La cuchara es remedio; la sal, moderación.",
    ],
  },
  {
    slug: "chequeo-salud-fin-de-ano",
    title: "Tu chequeo de fin de año: análisis, caducidades y balance de hábitos",
    excerpt:
      "Como con las cuentas, con la salud: cerrar pendientes, revisar la estantería de lo natural y anotar qué funcionó este año para el que viene.",
    category: "Prevención",
    date: "2029-12-11",
    minutes: 6,
    icon: CalendarCheck,
    content: [
      "El fin de año es el momento natural de hacer balances, y la salud merece el mismo cuaderno que las cuentas: qué pendientes quedan abiertos, qué se revisa una vez al año y qué se planea que no se quede en intención de enero.",
      "La lista de pendientes clásica: análisis básico si lleva más de un año (glucosa, perfil lípido, función renal, vitamina D, y ferritina y tiroides si hay fatiga), tomar la tensión (aunque sea en la farmacia de la esquina), revisión dental y de la vista, y la vacuna de temporada si corresponde. Ninguna de estas cosas se siente urgente hasta que lo es; el chequeo es urgencia evitada.",
      "La revisión de estantería que casi nadie hace: las tisanas, los aceites macerados, los suplementos y la cosmética natural caducan, y su eficacia se cae antes de lo que caduca el bote. Fecha de apertura en la etiqueta, fuera lo que huele rancio o cambió de color, y lo que no recuerdas para qué compraste: regalado o despedido. La despensa natural se ordena como la de cocina: queda lo que se usa.",
      "Y el balance honesto de hábitos: qué funcionó este año y qué no, qué intención de enero se quedó en la primera semana y qué medida pequeña y sostenible vale más que cinco grandes que no duran. La salud se gestiona a largo plazo —como un jardín, no como una emergencia—, y diciembre es el mejor mes para ajustar el rumbo.",
    ],
  },
];

export function getPost(slug: string): Post | undefined {
  return posts.find((p) => p.slug === slug);
}

export function formatDate(iso: string): string {
  return new Intl.DateTimeFormat("es-ES", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(new Date(iso));
}
