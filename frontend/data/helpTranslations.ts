export type HelpLanguage = "pt-BR" | "es-ES";
export const HELP_LANGUAGES = [
  { value: "pt-BR", label: "Português (Brasil)" },
  { value: "es-ES", label: "Español (España)" },
] as const;

export function normalizeHelpText(text: string) {
  return text.normalize("NFC").replace(/[‘’]/g, "'").replace(/[“”]/g, '"').replace(/\s+/g, " ").trim();
}

// Initial locally stored translations: Help!, Stand by Me, She Is a Carioca,
// and common activity instructions. No student text is sent to a service.
export const HELP_TRANSLATIONS: readonly (readonly [string, string, string])[] = [
  [
    "Do you know The Beatles?",
    "Você conhece os Beatles?",
    "¿Conoces a los Beatles?"
  ],
  [
    "Are they the most famous band ever?",
    "Eles são a banda mais famosa de todos os tempos?",
    "¿Son el grupo más famoso de todos los tiempos?"
  ],
  [
    "Do you appreciate it when people help you?",
    "Você fica agradecido quando as pessoas ajudam você?",
    "¿Agradeces que la gente te ayude?"
  ],
  [
    "Are you self-assured?",
    "Você tem confiança em si mesmo?",
    "¿Tienes confianza en ti mismo?"
  ],
  [
    "Is the weather hazy around your home today?",
    "Está com névoa perto da sua casa hoje?",
    "¿Hay neblina cerca de tu casa hoy?"
  ],
  [
    "Do you change your mind now and then?",
    "Você muda de ideia de vez em quando?",
    "¿Cambias de opinión de vez en cuando?"
  ],
  [
    "Who is the singer talking to?",
    "Com quem o cantor está falando?",
    "¿Con quién está hablando el cantante?"
  ],
  [
    "What does the singer need?",
    "Do que o cantor precisa?",
    "¿Qué necesita el cantante?"
  ],
  [
    "Do you ask for help sometimes?",
    "Você pede ajuda às vezes?",
    "¿Pides ayuda a veces?"
  ],
  [
    "Do you need help in your life right now?",
    "Você precisa de ajuda na sua vida neste momento?",
    "¿Necesitas ayuda en tu vida ahora mismo?"
  ],
  [
    "Who helps you in difficult times? Is this person important in your life?",
    "Quem ajuda você nos momentos difíceis? Essa pessoa é importante na sua vida?",
    "¿Quién te ayuda en los momentos difíciles? ¿Es importante esa persona en tu vida?"
  ],
  [
    "smoke or mist in the air that makes it hard to see",
    "fumaça ou névoa no ar que dificulta a visão",
    "humo o niebla en el aire que dificulta la visión"
  ],
  [
    "sometimes, but not often",
    "às vezes, mas não com frequência",
    "a veces, pero no a menudo"
  ],
  [
    "sure of yourself and what you can do",
    "confiante em si mesmo e no que consegue fazer",
    "seguro de ti mismo y de lo que puedes hacer"
  ],
  [
    "to decide to do or think something different",
    "decidir fazer ou pensar algo diferente",
    "decidir hacer o pensar algo diferente"
  ],
  [
    "to be glad about something someone does for you",
    "ficar feliz com algo que alguém faz por você",
    "alegrarte por algo que alguien hace por ti"
  ],
  [
    "to feel sad",
    "sentir-se triste",
    "sentirse triste"
  ],
  [
    "to feel in control again after a hard time",
    "sentir que está no controle de novo após um momento difícil",
    "volver a sentir que tienes el control después de una etapa difícil"
  ],
  [
    "to be nearby or there for someone",
    "estar por perto ou disponível para alguém",
    "estar cerca o disponible para alguien"
  ],
  [
    "Do you like bossa nova?",
    "Você gosta de bossa nova?",
    "¿Te gusta la bossa nova?"
  ],
  [
    "Do you know Tom Jobim?",
    "Você conhece Tom Jobim?",
    "¿Conoces a Tom Jobim?"
  ],
  [
    "Where are you from?",
    "De onde você é?",
    "¿De dónde eres?"
  ],
  [
    "Do you forget things sometimes?",
    "Você esquece as coisas às vezes?",
    "¿Se te olvidan las cosas a veces?"
  ],
  [
    "What happened all of a sudden in your life?",
    "O que aconteceu de repente na sua vida?",
    "¿Qué ocurrió de repente en tu vida?"
  ],
  [
    "Can you see the sea from your house?",
    "Você consegue ver o mar da sua casa?",
    "¿Puedes ver el mar desde tu casa?"
  ],
  [
    "Is this song about a man or a woman?",
    "Esta música é sobre um homem ou uma mulher?",
    "¿Esta canción trata de un hombre o de una mujer?"
  ],
  [
    "Where is she from?",
    "De onde ela é?",
    "¿De dónde es ella?"
  ],
  [
    "Does the singer like her?",
    "O cantor gosta dela?",
    "¿Le gusta ella al cantante?"
  ],
  [
    "Do you feel like the singer sometimes?",
    "Você se sente como o cantor às vezes?",
    "¿Te sientes como el cantante a veces?"
  ],
  [
    "Do you think Brazilian people have a special charm? Why or why not?",
    "Você acha que os brasileiros têm um charme especial? Por quê?",
    "¿Crees que los brasileños tienen un encanto especial? ¿Por qué?"
  ],
  [
    "a person from the city of Rio de Janeiro, Brazil",
    "uma pessoa da cidade do Rio de Janeiro, no Brasil",
    "una persona de la ciudad de Río de Janeiro, Brasil"
  ],
  [
    "touching someone softly and with love",
    "tocando alguém de forma suave e carinhosa",
    "acariciar a alguien con suavidad y cariño"
  ],
  [
    "not remembered",
    "não lembrado",
    "no recordado"
  ],
  [
    "quickly, when you do not expect it",
    "rapidamente, quando você não espera",
    "de repente, cuando no te lo esperas"
  ],
  [
    "she is coming towards us now",
    "ela está vindo na nossa direção agora",
    "ella está viniendo hacia nosotros ahora"
  ],
  [
    "a large area of salt water",
    "uma grande área de água salgada",
    "una gran extensión de agua salada"
  ],
  [
    "Do you know Ben E. King?",
    "Você conhece Ben E. King?",
    "¿Conoces a Ben E. King?"
  ],
  [
    "Do you enjoy old soul and R&B songs?",
    "Você gosta de músicas antigas de soul e R&B?",
    "¿Te gustan las canciones antiguas de soul y R&B?"
  ],
  [
    "Who always stands by you?",
    "Quem sempre apoia você?",
    "¿Quién te apoya siempre?"
  ],
  [
    "What are you afraid of?",
    "Do que você tem medo?",
    "¿De qué tienes miedo?"
  ],
  [
    "When did you last shed a tear?",
    "Quando foi a última vez que você chorou?",
    "¿Cuándo fue la última vez que derramaste una lágrima?"
  ],
  [
    "What can make a friendship crumble?",
    "O que pode acabar com uma amizade?",
    "¿Qué puede hacer que una amistad se venga abajo?"
  ],
  [
    "Who is the singer asking to stand by him?",
    "A quem o cantor está pedindo apoio?",
    "¿A quién le pide apoyo el cantante?"
  ],
  [
    "What parts of the song make you visualize images or scenarios?",
    "Que partes da música fazem você imaginar imagens ou cenas?",
    "¿Qué partes de la canción te hacen imaginar imágenes o escenas?"
  ],
  [
    "Is emotional support important in a friendship? Why?",
    "O apoio emocional é importante em uma amizade? Por quê?",
    "¿Es importante el apoyo emocional en una amistad? ¿Por qué?"
  ],
  [
    "Who would you stand by during a difficult time?",
    "Quem você apoiaria em um momento difícil?",
    "¿A quién apoyarías en un momento difícil?"
  ],
  [
    "Who always stands by you when life is difficult? Describe this person and explain how they support you.",
    "Quem sempre apoia você quando a vida está difícil? Descreva essa pessoa e explique como ela ajuda você.",
    "¿Quién te apoya siempre cuando la vida es difícil? Describe a esa persona y explica cómo te apoya."
  ],
  [
    "to stay with someone and help them when life is hard",
    "ficar ao lado de alguém e ajudar quando a vida está difícil",
    "estar al lado de alguien y ayudarle cuando la vida es difícil"
  ],
  [
    "feeling scared that something bad may happen",
    "sentir medo de que algo ruim possa acontecer",
    "tener miedo de que pueda pasar algo malo"
  ],
  [
    "to fall suddenly or quickly",
    "cair de repente ou rapidamente",
    "caer de repente o rápidamente"
  ],
  [
    "to break into many small pieces",
    "quebrar em muitos pedacinhos",
    "romperse en muchos trozos pequeños"
  ],
  [
    "to cry or let a tear fall from your eye",
    "chorar ou deixar cair uma lágrima",
    "llorar o dejar caer una lágrima"
  ],
  [
    "only if; for example, I feel safe if you stay with me",
    "somente se; por exemplo, eu me sinto seguro se você ficar comigo",
    "solo si; por ejemplo, me siento seguro si te quedas conmigo"
  ],
  [
    "too far away or hidden, so you cannot see it",
    "longe demais ou escondido, de modo que você não consegue ver",
    "demasiado lejos u oculto, de modo que no puedes verlo"
  ],
  [
    "a name you call someone you love",
    "uma forma carinhosa de chamar alguém que você ama",
    "una forma cariñosa de llamar a alguien a quien quieres"
  ],
  [
    "Click the option you hear in each lyric gap.",
    "Clique na opção que você ouvir em cada lacuna da letra.",
    "Haz clic en la opción que oigas en cada hueco de la letra."
  ],
  [
    "Choose the verb form you hear in each line.",
    "Escolha a forma do verbo que você ouvir em cada linha.",
    "Elige la forma verbal que oigas en cada línea."
  ],
  [
    "Click a gap, then click an emoji to place it. Or click an emoji to use the next available gap.",
    "Clique em uma lacuna e depois em um emoji para colocá-lo ali. Ou clique em um emoji para preencher a próxima lacuna disponível.",
    "Haz clic en un hueco y después en un emoji para colocarlo ahí. O haz clic en un emoji para completar el siguiente hueco disponible."
  ],
  [
    "Click a gap, then click an emoji to place it. Or click an emoji to use the next available gap while you listen.",
    "Clique em uma lacuna e depois em um emoji para colocá-lo ali. Ou clique em um emoji para preencher a próxima lacuna disponível enquanto escuta.",
    "Haz clic en un hueco y después en un emoji para colocarlo ahí. O haz clic en un emoji para completar el siguiente hueco disponible mientras escuchas."
  ],
  [
    "Click a gap, then click a word to place it. Or click a word to use the next available gap.",
    "Clique em uma lacuna e depois em uma palavra para colocá-la ali. Ou clique em uma palavra para preencher a próxima lacuna disponível.",
    "Haz clic en un hueco y después en una palabra para colocarla ahí. O haz clic en una palabra para completar el siguiente hueco disponible."
  ],
  [
    "Unscramble the letters shown in each gap and type the correct word.",
    "Coloque as letras de cada lacuna em ordem e digite a palavra correta.",
    "Ordena las letras de cada hueco y escribe la palabra correcta."
  ],
  [
    "Type the missing letters to complete each word.",
    "Digite as letras que faltam para completar cada palavra.",
    "Escribe las letras que faltan para completar cada palabra."
  ],
  [
    "Type the missing letters to complete each verb.",
    "Digite as letras que faltam para completar cada verbo.",
    "Escribe las letras que faltan para completar cada verbo."
  ],
  [
    "Click a gap, then click a verb to place it. Or click a verb to use the next available gap.",
    "Clique em uma lacuna e depois em um verbo para colocá-lo ali. Ou clique em um verbo para preencher a próxima lacuna disponível.",
    "Haz clic en un hueco y después en un verbo para colocarlo ahí. O haz clic en un verbo para completar el siguiente hueco disponible."
  ],
  [
    "Click a gap, then click a noun to place it. Or click a noun to use the next available gap.",
    "Clique em uma lacuna e depois em um substantivo para colocá-lo ali. Ou clique em um substantivo para preencher a próxima lacuna disponível.",
    "Haz clic en un hueco y después en un sustantivo para colocarlo ahí. O haz clic en un sustantivo para completar el siguiente hueco disponible."
  ]
];

const translations = new Map(HELP_TRANSLATIONS.map(([en, pt, es]) => [
  normalizeHelpText(en), { "pt-BR": pt, "es-ES": es },
]));

export function getHelpTranslation(text: string, language: HelpLanguage): string | null {
  return translations.get(normalizeHelpText(text))?.[language] ?? null;
}
