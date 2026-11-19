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
  ["Do you know Frank Sinatra?", "Você conhece Frank Sinatra?", "¿Conoces a Frank Sinatra?"],
  ["Do you like Jazz?", "Você gosta de jazz?", "¿Te gusta el jazz?"],
  ["Do you know Machine Gun Kelly (MGK)?", "Você conhece Machine Gun Kelly (MGK)?", "¿Conoces a Machine Gun Kelly (MGK)?"],
  ["Do you like rock music?", "Você gosta de rock?", "¿Te gusta la música rock?"],
  ["a short romantic relationship", "um relacionamento amoroso curto", "una relación amorosa breve"],
  ["above my head", "acima da minha cabeça", "por encima de mi cabeza"],
  ["feelings of sadness", "sentimentos de tristeza", "sentimientos de tristeza"],
  ["a bad spirit and a good spirit in religious stories", "um espírito mau e um espírito bom em histórias religiosas", "un espíritu malo y un espíritu bueno en historias religiosas"],
  ["to feel happy because things are going well", "sentir-se feliz porque as coisas estão indo bem", "sentirse feliz porque las cosas van bien"],
  ["to stay quiet and not get noticed", "ficar quieto e não chamar atenção", "mantenerse callado y pasar desapercibido"],
  ["it is time for someone to die", "chegou a hora de alguém morrer", "ha llegado la hora de que alguien muera"],
  ["in place of something else", "no lugar de outra coisa", "en lugar de otra cosa"],
  ["an informal way to say am not, is not, are not, has not, or have not", "uma forma informal de dizer am not, is not, are not, has not ou have not", "una forma informal de decir am not, is not, are not, has not o have not"],
  ["Do you believe in devils and angels?", "Você acredita em demônios e anjos?", "¿Crees en demonios y ángeles?"],
  ["Do you have any flings at the moment?", "Você tem algum relacionamento casual no momento?", "¿Tienes alguna aventura amorosa en este momento?"],
  ["Are you feeling blue today?", "Você está se sentindo triste hoje?", "¿Te sientes triste hoy?"],
  ["In your life, do you ride high or lay low?", "Na sua vida, você está em uma fase boa ou prefere ficar na sua?", "En tu vida, ¿estás en un buen momento o prefieres pasar desapercibido?"],
  ["Does the singer enjoy life?", "O cantor aproveita a vida?", "¿Disfruta de la vida el cantante?"],
  ["Are you similar to the singer?", "Você é parecido com o cantor?", "¿Te pareces al cantante?"],
  ["Do you like to drink and dance?", "Você gosta de beber e dançar?", "¿Te gusta beber y bailar?"],
  ["Can you manage your feelings when you feel blue?", "Você consegue lidar com seus sentimentos quando está triste?", "¿Puedes gestionar tus sentimientos cuando estás triste?"],
  ["Is it important to enjoy life? How do you balance responsibilities and fun?", "É importante aproveitar a vida? Como você equilibra responsabilidades e diversão?", "¿Es importante disfrutar de la vida? ¿Cómo equilibras las responsabilidades y la diversión?"],
  ["Do you like The Beatles?", "Você gosta dos Beatles?", "¿Te gustan los Beatles?"],
  ["Do you know this song?", "Você conhece esta música?", "¿Conoces esta canción?"],
  ["Have you ever watched Toy Story?", "Você já assistiu a Toy Story?", "¿Has visto Toy Story alguna vez?"],
  ["Do you like Taylor Swift?", "Você gosta da Taylor Swift?", "¿Te gusta Taylor Swift?"],
  ["a word you say when you meet someone", "uma palavra que você diz quando encontra alguém", "una palabra que dices cuando te encuentras con alguien"],
  ["a word you say when you leave someone", "uma palavra que você diz quando se despede de alguém", "una palabra que dices cuando te despides de alguien"],
  ["far above the ground", "muito acima do chão", "muy por encima del suelo"],
  ["near the ground; not high", "perto do chão; não alto", "cerca del suelo; no alto"],
  ["I do not have the answer", "Eu não tenho a resposta", "No tengo la respuesta"],
  ['When do you say "Hello"?', 'Quando você diz "Hello" (olá)?', '¿Cuándo dices "Hello" (hola)?'],
  ['When do you say "Goodbye"?', 'Quando você diz "Goodbye" (tchau)?', '¿Cuándo dices "Goodbye" (adiós)?'],
  ["Do you know the capital of England, or don't you know?", "Você sabe qual é a capital da Inglaterra ou não sabe?", "¿Sabes cuál es la capital de Inglaterra o no lo sabes?"],
  ['Why do people say "Goodbye" and "Hello"?', 'Por que as pessoas dizem "Goodbye" (tchau) e "Hello" (olá)?', '¿Por qué la gente dice "Goodbye" (adiós) y "Hello" (hola)?'],
  ["Can you name some opposite words in the song?", "Você consegue dizer algumas palavras de sentido contrário na música?", "¿Puedes decir algunas palabras de significado contrario de la canción?"],
  ["Do you like the song?", "Você gosta da música?", "¿Te gusta la canción?"],
  ['Write a short message to your favorite singer. Include "Hello" and "Goodbye" in the message.', 'Escreva uma mensagem curta para seu cantor ou sua cantora favorita. Inclua "Hello" e "Goodbye" na mensagem.', 'Escribe un mensaje corto a tu cantante favorito o favorita. Incluye "Hello" y "Goodbye" en el mensaje.'],
  ["Click a gap, then click a clause to place it. Or click a clause to use the next available gap.", "Clique em uma lacuna e depois em uma frase para colocá-la ali. Ou clique em uma frase para preencher a próxima lacuna disponível.", "Haz clic en un hueco y después en una frase para colocarla ahí. O haz clic en una frase para completar el siguiente hueco disponible."],
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
