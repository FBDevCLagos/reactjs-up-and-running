const BASE_URL = 'https://afiora.netlify.app/images/products';
const inventory = [
  {
    id: '3a980887-76aa-4f48-b71d-8a22921c6780',
    name: 'Embrace Blue',
    price: '3000',
    imageSrc: `${BASE_URL}/chair1.png`,
    description:
      'You don’t have to go outside to be rugged. The Cigar rawhide sofa features a sturdy corner-blocked wooden frame and raw seams for that Malboro-person look. This brown leather sofa is cozy in a cottage, cabin, or a condo. And the leather (the leather!) becomes more beautiful with use: subtle character markings such as insect bites, healed scars, and grain variation reflects a real vintage. Saddle up and pass the remote.',
    currentInventory: 12,
  },
  {
    id: 'b469d704-2e3c-413f-be0e-fe776a065d18',
    name: 'Nord Lounger',
    price: '8250',
    imageSrc: `${BASE_URL}/chair2.png`,
    description:
      'You don’t have to go outside to be rugged. The Cigar rawhide sofa features a sturdy corner-blocked wooden frame and raw seams for that Malboro-person look. This brown leather sofa is cozy in a cottage, cabin, or a condo. And the leather (the leather!) becomes more beautiful with use: subtle character markings such as insect bites, healed scars, and grain variation reflects a real vintage. Saddle up and pass the remote.',
    currentInventory: 13,
  },
  {
    id: '56371402-d263-43b0-b0e3-8a4e11153228',
    name: 'Ceni Matte Oranve',
    price: '7200',
    imageSrc: `${BASE_URL}/chair3.png`,
    description:
      'You don’t have to go outside to be rugged. The Cigar rawhide sofa features a sturdy corner-blocked wooden frame and raw seams for that Malboro-person look. This brown leather sofa is cozy in a cottage, cabin, or a condo. And the leather (the leather!) becomes more beautiful with use: subtle character markings such as insect bites, healed scars, and grain variation reflects a real vintage. Saddle up and pass the remote.',
    currentInventory: 33,
  },
  {
    id: '4e931dc8-72cb-4062-814a-56d1cf158d38',
    name: 'Abisko Green Recliner',
    price: '20000',
    imageSrc: `${BASE_URL}/chair4.png`,
    description:
      'You don’t have to go outside to be rugged. The Cigar rawhide sofa features a sturdy corner-blocked wooden frame and raw seams for that Malboro-person look. This brown leather sofa is cozy in a cottage, cabin, or a condo. And the leather (the leather!) becomes more beautiful with use: subtle character markings such as insect bites, healed scars, and grain variation reflects a real vintage. Saddle up and pass the remote.',
    currentInventory: 23,
  },
  {
    id: 'e81c2cee-4a2c-442e-bdb2-287cea59ff36',
    name: 'Denim on Denim Single',
    price: '11000',
    imageSrc: `${BASE_URL}/chair5.png`,
    description:
      'You don’t have to go outside to be rugged. The Cigar rawhide sofa features a sturdy corner-blocked wooden frame and raw seams for that Malboro-person look. This brown leather sofa is cozy in a cottage, cabin, or a condo. And the leather (the leather!) becomes more beautiful with use: subtle character markings such as insect bites, healed scars, and grain variation reflects a real vintage. Saddle up and pass the remote.',
    currentInventory: 13,
  },
  {
    id: 'bca0f572-a42b-45a9-97dc-027b82e71534',
    name: 'Levo Tan Lounge Chair',
    price: '6000',
    imageSrc: `${BASE_URL}/chair6.png`,
    description:
      'You don’t have to go outside to be rugged. The Cigar rawhide sofa features a sturdy corner-blocked wooden frame and raw seams for that Malboro-person look. This brown leather sofa is cozy in a cottage, cabin, or a condo. And the leather (the leather!) becomes more beautiful with use: subtle character markings such as insect bites, healed scars, and grain variation reflects a real vintage. Saddle up and pass the remote.',
    currentInventory: 15,
  },

  {
    id: 'b26142d9-e2da-44f4-a664-b6840ba5c646',
    name: 'Anime Tint Recliner',
    price: '7750',
    imageSrc: `${BASE_URL}/chair7.png`,
    description:
      'You don’t have to go outside to be rugged. The Cigar rawhide sofa features a sturdy corner-blocked wooden frame and raw seams for that Malboro-person look. This brown leather sofa is cozy in a cottage, cabin, or a condo. And the leather (the leather!) becomes more beautiful with use: subtle character markings such as insect bites, healed scars, and grain variation reflects a real vintage. Saddle up and pass the remote.',
    currentInventory: 44,
  },
  {
    id: '7df39944-aa4a-43c1-af8f-8390d81e4fb1',
    name: 'Josh Jones Red Chair',
    price: '12000',
    imageSrc: `${BASE_URL}/chair8.png`,
    description:
      'You don’t have to go outside to be rugged. The Cigar rawhide sofa features a sturdy corner-blocked wooden frame and raw seams for that Malboro-person look. This brown leather sofa is cozy in a cottage, cabin, or a condo. And the leather (the leather!) becomes more beautiful with use: subtle character markings such as insect bites, healed scars, and grain variation reflects a real vintage. Saddle up and pass the remote.',
    currentInventory: 17,
  },
  {
    id: '1a6f42ea-2583-4d02-8d0b-53ad533c8c87',
    name: 'Black Sand Lounge',
    price: '16000',
    imageSrc: `${BASE_URL}/chair9.png`,
    description:
      'You don’t have to go outside to be rugged. The Cigar rawhide sofa features a sturdy corner-blocked wooden frame and raw seams for that Malboro-person look. This brown leather sofa is cozy in a cottage, cabin, or a condo. And the leather (the leather!) becomes more beautiful with use: subtle character markings such as insect bites, healed scars, and grain variation reflects a real vintage. Saddle up and pass the remote.',
    currentInventory: 28,
  },
  {
    id: 'db0295af-c452-46e4-9d17-bba8b2bb6a93',
    name: 'Mint Beige Workchair',
    price: '5500',
    imageSrc: `${BASE_URL}/chair10.png`,
    description:
      'You don’t have to go outside to be rugged. The Cigar rawhide sofa features a sturdy corner-blocked wooden frame and raw seams for that Malboro-person look. This brown leather sofa is cozy in a cottage, cabin, or a condo. And the leather (the leather!) becomes more beautiful with use: subtle character markings such as insect bites, healed scars, and grain variation reflects a real vintage. Saddle up and pass the remote.',
    currentInventory: 31,
  },
  {
    id: '846c5617-893a-4d3f-9d6a-f91e5a4f88a7',
    name: 'Mint Beige Couch',
    price: '5500',
    imageSrc: `${BASE_URL}/couch1.png`,
    description:
      'You don’t have to go outside to be rugged. The Cigar rawhide sofa features a sturdy corner-blocked wooden frame and raw seams for that Malboro-person look. This brown leather sofa is cozy in a cottage, cabin, or a condo. And the leather (the leather!) becomes more beautiful with use: subtle character markings such as insect bites, healed scars, and grain variation reflects a real vintage. Saddle up and pass the remote.',
    currentInventory: 31,
  },
  {
    id: 'c04592ca-88e2-4f62-b297-674b0c4b04b1',
    name: 'Mint Beige Couch II',
    price: '5500',
    imageSrc: `${BASE_URL}/couch2.png`,
    description:
      'You don’t have to go outside to be rugged. The Cigar rawhide sofa features a sturdy corner-blocked wooden frame and raw seams for that Malboro-person look. This brown leather sofa is cozy in a cottage, cabin, or a condo. And the leather (the leather!) becomes more beautiful with use: subtle character markings such as insect bites, healed scars, and grain variation reflects a real vintage. Saddle up and pass the remote.',
    currentInventory: 31,
  },
  {
    id: 'db5dbad4-2f57-40c3-918e-2dfdfe102cb4',
    name: 'Mint Beige Couch III',
    price: '5500',
    imageSrc: `${BASE_URL}/couch3.png`,
    description:
      'You don’t have to go outside to be rugged. The Cigar rawhide sofa features a sturdy corner-blocked wooden frame and raw seams for that Malboro-person look. This brown leather sofa is cozy in a cottage, cabin, or a condo. And the leather (the leather!) becomes more beautiful with use: subtle character markings such as insect bites, healed scars, and grain variation reflects a real vintage. Saddle up and pass the remote.',
    currentInventory: 31,
  },
  {
    id: '0ba55888-05b8-4d6c-b96e-a1dd73f62856',
    name: 'Mint Beige Couch IV',
    price: '5500',
    imageSrc: `${BASE_URL}/couch4.png`,
    description:
      'You don’t have to go outside to be rugged. The Cigar rawhide sofa features a sturdy corner-blocked wooden frame and raw seams for that Malboro-person look. This brown leather sofa is cozy in a cottage, cabin, or a condo. And the leather (the leather!) becomes more beautiful with use: subtle character markings such as insect bites, healed scars, and grain variation reflects a real vintage. Saddle up and pass the remote.',
    currentInventory: 31,
  },
  {
    id: 'd7e14603-de33-427b-b4a0-af7564e8bd68',
    name: 'Mint Beige Couch V2',
    price: '5500',
    imageSrc: `${BASE_URL}/couch5.png`,
    description:
      'You don’t have to go outside to be rugged. The Cigar rawhide sofa features a sturdy corner-blocked wooden frame and raw seams for that Malboro-person look. This brown leather sofa is cozy in a cottage, cabin, or a condo. And the leather (the leather!) becomes more beautiful with use: subtle character markings such as insect bites, healed scars, and grain variation reflects a real vintage. Saddle up and pass the remote.',
    currentInventory: 31,
  },
  {
    id: '4377ccf1-6919-485d-b075-1c1939e248a1',
    name: 'Mint Beige Couch V3',
    price: '5500',
    imageSrc: `${BASE_URL}/couch6.png`,
    description:
      'You don’t have to go outside to be rugged. The Cigar rawhide sofa features a sturdy corner-blocked wooden frame and raw seams for that Malboro-person look. This brown leather sofa is cozy in a cottage, cabin, or a condo. And the leather (the leather!) becomes more beautiful with use: subtle character markings such as insect bites, healed scars, and grain variation reflects a real vintage. Saddle up and pass the remote.',
    currentInventory: 31,
  },
  {
    id: 'f57a8f7b-d3c0-4cd2-8056-11606638fdde',
    name: 'Mint Beige Couch V4',
    price: '5500',
    imageSrc: `${BASE_URL}/couch7.png`,
    description:
      'You don’t have to go outside to be rugged. The Cigar rawhide sofa features a sturdy corner-blocked wooden frame and raw seams for that Malboro-person look. This brown leather sofa is cozy in a cottage, cabin, or a condo. And the leather (the leather!) becomes more beautiful with use: subtle character markings such as insect bites, healed scars, and grain variation reflects a real vintage. Saddle up and pass the remote.',
    currentInventory: 31,
  },
  {
    id: 'f940017c-ed57-4efa-b36d-ee54c291b7e5',
    name: 'Mint Beige Couch EE-1',
    price: '5500',
    imageSrc: `${BASE_URL}/couch8.png`,
    description:
      'You don’t have to go outside to be rugged. The Cigar rawhide sofa features a sturdy corner-blocked wooden frame and raw seams for that Malboro-person look. This brown leather sofa is cozy in a cottage, cabin, or a condo. And the leather (the leather!) becomes more beautiful with use: subtle character markings such as insect bites, healed scars, and grain variation reflects a real vintage. Saddle up and pass the remote.',
    currentInventory: 31,
  },
  {
    id: '711bf100-7253-49be-82c0-cd2bc74a078d',
    name: 'Mint Beige Couch EE-2',
    price: '5500',
    imageSrc: `${BASE_URL}/couch9.png`,
    description:
      'You don’t have to go outside to be rugged. The Cigar rawhide sofa features a sturdy corner-blocked wooden frame and raw seams for that Malboro-person look. This brown leather sofa is cozy in a cottage, cabin, or a condo. And the leather (the leather!) becomes more beautiful with use: subtle character markings such as insect bites, healed scars, and grain variation reflects a real vintage. Saddle up and pass the remote.',
    currentInventory: 31,
  },
  {
    id: '9529f05d-f1df-440d-a665-4b15ee6ff124',
    name: 'Mint Beige Couch EE-3',
    price: '5500',
    imageSrc: `${BASE_URL}/couch10.png`,
    description:
      'You don’t have to go outside to be rugged. The Cigar rawhide sofa features a sturdy corner-blocked wooden frame and raw seams for that Malboro-person look. This brown leather sofa is cozy in a cottage, cabin, or a condo. And the leather (the leather!) becomes more beautiful with use: subtle character markings such as insect bites, healed scars, and grain variation reflects a real vintage. Saddle up and pass the remote.',
    currentInventory: 31,
  },
  {
    id: 'e835e51d-daa0-4b27-b4ff-e0f0f9ef467e',
    name: 'Mint Beige Couch EE-4',
    price: '5500',
    imageSrc: `${BASE_URL}/couch11.png`,
    description:
      'You don’t have to go outside to be rugged. The Cigar rawhide sofa features a sturdy corner-blocked wooden frame and raw seams for that Malboro-person look. This brown leather sofa is cozy in a cottage, cabin, or a condo. And the leather (the leather!) becomes more beautiful with use: subtle character markings such as insect bites, healed scars, and grain variation reflects a real vintage. Saddle up and pass the remote.',
    currentInventory: 31,
  },
  {
    id: '6b2e905d-62c9-4e82-aac0-adfaf2cbbe0a',
    name: 'Mint Beige Couch EE-5',
    price: '5500',
    imageSrc: `${BASE_URL}/couch12.png`,
    description:
      'You don’t have to go outside to be rugged. The Cigar rawhide sofa features a sturdy corner-blocked wooden frame and raw seams for that Malboro-person look. This brown leather sofa is cozy in a cottage, cabin, or a condo. And the leather (the leather!) becomes more beautiful with use: subtle character markings such as insect bites, healed scars, and grain variation reflects a real vintage. Saddle up and pass the remote.',
    currentInventory: 31,
  },
  {
    id: 'ecd3a4da-428d-4e0d-96b5-f13a2fe28864',
    name: 'Mint Beige Couch EE-6',
    price: '5500',
    imageSrc: `${BASE_URL}/couch13.png`,
    description:
      'You don’t have to go outside to be rugged. The Cigar rawhide sofa features a sturdy corner-blocked wooden frame and raw seams for that Malboro-person look. This brown leather sofa is cozy in a cottage, cabin, or a condo. And the leather (the leather!) becomes more beautiful with use: subtle character markings such as insect bites, healed scars, and grain variation reflects a real vintage. Saddle up and pass the remote.',
    currentInventory: 31,
  },
  {
    id: '6cb2cf5d-fa97-4f9b-a1ea-e78efe25d0de',
    name: 'Mint Beige Couch EE-7',
    price: '5500',
    imageSrc: `${BASE_URL}/couch14.png`,
    description:
      'You don’t have to go outside to be rugged. The Cigar rawhide sofa features a sturdy corner-blocked wooden frame and raw seams for that Malboro-person look. This brown leather sofa is cozy in a cottage, cabin, or a condo. And the leather (the leather!) becomes more beautiful with use: subtle character markings such as insect bites, healed scars, and grain variation reflects a real vintage. Saddle up and pass the remote.',
    currentInventory: 31,
  },
  {
    id: '53694df7-a704-4d5b-94fe-95c74d766b51',
    name: 'Mint Beige Couch (Special Edition)',
    price: '5500',
    imageSrc: `${BASE_URL}/couch15.png`,
    description:
      'You don’t have to go outside to be rugged. The Cigar rawhide sofa features a sturdy corner-blocked wooden frame and raw seams for that Malboro-person look. This brown leather sofa is cozy in a cottage, cabin, or a condo. And the leather (the leather!) becomes more beautiful with use: subtle character markings such as insect bites, healed scars, and grain variation reflects a real vintage. Saddle up and pass the remote.',
    currentInventory: 31,
  },
];

export default inventory;
