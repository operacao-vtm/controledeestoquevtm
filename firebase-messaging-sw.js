// Avisos do Controle de Estoque (Firebase). Fica na raiz do repositório, ao lado do index.html.
// Recebe os avisos de pedido de troca e saída de material mesmo com o estoque fechado.
importScripts('https://www.gstatic.com/firebasejs/10.12.2/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/10.12.2/firebase-messaging-compat.js');
firebase.initializeApp({
  apiKey: 'AIzaSyBcZzBG3ADvSkXAk2IKTNbUvjD0-T08alk', authDomain: 'painel-de-os.firebaseapp.com',
  projectId: 'painel-de-os', storageBucket: 'painel-de-os.firebasestorage.app',
  messagingSenderId: '575243124952', appId: '1:575243124952:web:0ad5b1f2391dd369b0d7ad'
});
firebase.messaging();
