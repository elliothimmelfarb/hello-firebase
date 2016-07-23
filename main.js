const config = {
  apiKey: "AIzaSyBkDcntoiu9E5hKuT1l2toW-77XSvd3suo",
  authDomain: "decoded-reducer-137923.firebaseapp.com",
  databaseURL: "https://decoded-reducer-137923.firebaseio.com",
  storageBucket: "decoded-reducer-137923.appspot.com",
};

firebase.initializeApp(config);

const database = firebase.database();

const wordsRef = '/words';

$(() => {

  database.ref(wordsRef).on('value', snapshot => {

    const dataObj = snapshot.val();
    let $lis = [];

    for (let key in dataObj) {
      let message = dataObj[key];
      let $li = $('<li>').text(message.name + " - " + message.text);
      $lis.push($li);
    }

    $('#list').empty().append($lis);
  });

  $('#clickMe').click(() => {
    const text = $('#myInput').val();
    const name = $('#myName').val();
    const message = {text, name};
    $('#myInput').val('');
    database.ref(wordsRef).push(message);
  })
})

database.ref('/words/').child('-KNEQTglZwYgHLo7r4Rf').update({
  name: 'Dope',
})
