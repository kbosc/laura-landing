export interface DetailItem {
  title: string;
  content: string;
}

export interface DetailGroup {
  universe: 'diet' | 'energy';
  label: string;
  items: DetailItem[];
}

export const detailGroups: DetailGroup[] = [
  {
    universe: 'diet',
    label: 'Diététique',
    items: [
      {
        title: 'La première consultation',
        content: `Les premières consultations diététiques, que ce soit pour un enfant ou un adulte, comportent un bilan complet.

Je fais le point avec vous sur ce qui vous a amené à consulter, puis nous faisons un tour d'horizon de vos habitudes de vie et données médicales afin de personnaliser le suivi et les conseils diététiques.

À la fin de cette première consultation, nous définissons ensemble les objectifs pour les prochaines séances, nous établissons une liste d'actions à réaliser et on refait un point sur l'essentiel de ce qui a été dit.

Je ne pèse pas mes consultants, mais j'ai une balance si nécessaire. Le poids est une donnée médicale dont j'ai uniquement besoin pour estimer vos besoins et votre dépense énergétique.

Une feuille avec une organisation alimentaire vous est remise sous 48h afin de vous orienter dans ce début de suivi. D'autres documents peuvent être joints si nécessaire.`,
      },
      {
        title: 'Les consultations de suivi',
        content: `Les consultations de suivi sont assez classiques. On fait un point sur le temps passé entre les deux consultations, puis on prend un temps pour travailler l'un des points que nous devions évoquer, suivant les objectifs définis lors de la première consultation.

C'est un moment d'échange bienveillant, à votre rythme, pour avancer pas à pas vers vos objectifs.`,
      },
      {
        title: 'Le suivi à domicile (seniors)',
        content: `Pour les seniors de plus de 65 ans, je propose des consultations à domicile.

Des frais de déplacement s'appliquent selon la distance :
• 0 à 5 km : 5 €
• 5 à 10 km : 10 €
• 10 à 20 km : 15 €
• Au-delà : 6 € par tranche de 10 km supplémentaires`,
      },
    ],
  },
  {
    universe: 'energy',
    label: 'Énergétique',
    items: [
      {
        title: 'Comment se déroule un soin énergétique ?',
        content: `Une séance pour un soin énergétique ou un soin Reiki se compose d'un temps d'échange afin de voir avec vous quels sont les motifs qui vous ont amené à me consulter. Je vous demande de poser une intention pour le soin.

Par exemple : "Je souhaite diminuer mon anxiété", "Je souhaite diminuer mes douleurs à l'épaule gauche", "Je souhaite avoir davantage confiance en moi."

Le soin se déroule ensuite dans le silence ou avec une musique douce et apaisante. Vous êtes allongé(e) sur une table de massage et habillé(e). Je passe mes mains au-dessus de vous, ou je peux avoir un contact physique avec votre tête par exemple — ceci est à définir avant le soin.

Suite au soin, nous prenons le temps d'échanger sur vos ressentis et comment vous allez.`,
      },
      {
        title: 'Soins à distance : comment ça fonctionne ?',
        content: `Un soin à distance peut se faire en visioconférence ou à l'aide d'une photo, avec des messages vocaux pour commencer et finir le soin.

Je propose les deux formules car certaines personnes préfèrent être au calme et sont peu à l'aise à s'exprimer avec des personnes peu connues, tandis que d'autres ont besoin d'un réel échange en direct.

Il n'y a pas de différence de prix entre le présentiel et les soins à distance. Le travail effectué est le même — la seule différence, c'est que vous ne dépensez pas d'essence !

⚠️ Le Reiki est proposé uniquement en présentiel.
⚠️ Pas de soin énergétique sur les femmes enceintes de moins de 3 mois. Le soin Métatron est déconseillé aux femmes enceintes en général.`,
      },
      {
        title: 'Le Reiki',
        content: `Accordez-vous un moment de douceur et de détente dans un espace sacré rien que pour vous.

Le Reiki est un soin d'harmonisation énergétique par imposition des mains. Si vous cherchez un soin qui peut vous aider à diminuer votre anxiété, diminuer l'impact qu'ont vos émotions sur votre vie, ou encore diminuer certaines douleurs, ce soin est fait pour vous.

Le Reiki ne comporte pas de message de vos guides spirituels — c'est ce qui le différencie des autres soins énergétiques au niveau tarifaire.

Uniquement en présentiel.`,
      },
      {
        title: 'Les soins énergétiques (Lahochi, Métatron, Ganesh, Scarabée d\'Or, Triangle d\'Or d\'Isis)',
        content: `Chaque soin travaille sur des thématiques précises :

🌿 Le Lahochi est globalement porté sur une thématique de guérison générale, en travaillant l'émotionnel et l'apaisement.

✨ Le Métatron est un peu comme un grand ménage de printemps. On ressort ce qui a été enfoui au plus profond de nous pour enfin le traiter. Cela peut remuer, même si c'est pour du positif !

🌙 Le Scarabée d'Or permet de travailler de manière générale sur l'aspect divin de notre être. Il travaille notamment sur l'équilibre féminin-masculin.

🌸 Le Triangle d'Or d'Isis vous enveloppe de douceur et vous accompagne au quotidien. On met à l'honneur le féminin sacré avec Isis.

🐘 Le Ganesh travaille sur l'abondance dans toutes les sphères de votre vie, et sur les blocages qui vous limitent au quotidien.

Tous ces soins peuvent se faire en présentiel ou à distance.`,
      },
      {
        title: 'Les guidances',
        content: `Sur la première guidance, nous explorons en profondeur qui vous êtes avec la numérologie et nous évoquons vos buts, défis et points forts.

Nous faisons ensuite un état des lieux de vos chakras avec explication de l'impact des déséquilibres s'il y en a. Ensuite, nous regarderons vos blocages et explorerons des axes d'amélioration possibles.

Pour finir, vous pourrez poser 3 questions personnelles.

Vous recevrez sous 48h un document récapitulatif de ce qui a été révélé lors de cette séance, avec des guidances à la fin pour pouvoir relire tranquillement ce qui vous a été transmis, à votre rythme.

La guidance peut se faire en présentiel, en visioconférence ou par appel/WhatsApp avec des messages vocaux. Dans tous les cas, vous avez les explications au moment même de la séance, plus le support écrit.`,
      },
      {
        title: 'La Cartomancie',
        content: `La séance de Cartomancie peut se faire en présentiel ou à distance (visio ou messages vocaux sur WhatsApp).

Vous recevez également un support écrit à la fin avec la réponse à votre question.

Je propose plusieurs forfaits :
• 1 question : 10 €
• 3 questions : 30 €
• Pack vie sentimentale : 45 €
• Pack vie professionnelle : 45 €
• Tirage complet : vie sentimentale, vie professionnelle, évolution personnelle et blocages + 2 questions personnelles

⚠️ Pas de question sur la grossesse, la santé ou la mort.`,
      },
    ],
  },
];
