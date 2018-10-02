import LocalizedStrings from 'react-localization';
 
let strings = new LocalizedStrings({
 en:{
   date:"Select a date when you saw her/him",
   gender:"gender",
   female:"female",
   male:"male",
   age:"age",
   teen:"teen",
   young:"young adult",
   adult:"adult",
   middle_aged:"middle-aged",
   elder:"elderly",
   add_placeholder:"anything else?",
   sent_button:"Sent!"
 },
 hu: {
   date:"Válassz dátumot, amikor láttad őt!",
   gender:"neme",
   female:"nő",
   male:"férfi",
   age:"kora",
   teen:"tini",
   young:"fiatalember/hölgy",
   adult:"felnőtt",
   middle_aged:"középkorú",
   elder:"idős",
   add_placeholder:"egyéb jellemzők?",
   sent_button:"Elküldve!"
 }
});

strings.setLanguage(localStorage.getItem('lang'));

export default strings;