const cardList = [
    {
        title: 'Black Widow', image: 'images/widow.jpeg', description: "Black Widow is a Marvel Comics superheroine created by Stan Lee. Her real name is Natasha Romanoff, a highly skilled spy and assassin who has worked with both S.H.I.E.L.D. and the Avengers."
    },
    {
        title: 'Hulk', image: 'images/hulk.webp', description: "The Hulk is a Marvel Comics superhero created by Stan Lee and Jack Kirby. His alter ego is Dr. Bruce Banner, a scientist who transforms into a green, superhuman creature with incredible strength and durability when he becomes angry or stressed."
    },
    {
        title: 'Black Panther', image: 'images/black_panther.webp', description: "Black Panther is a Marvel Comics superhero created by Stan Lee and Jack Kirby. His real name is T'Challa, the king of the fictional African nation of Wakanda, who possesses enhanced strength and agility, advanced technology, and a suit made of Vibranium."
    },
    {
        title: 'Spider-Man', image: 'images/spider.jpg', description: "Spider-Man is a Marvel Comics superhero created by Stan Lee and Steve Ditko. His real name is Peter Parker, a high school student who gains spider-like abilities and uses them to fight crime in New York City."
    },
    {
        title: 'Doctor Strange', image: 'images/strange.jpg', description: "Doctor Strange is a Marvel Comics superhero created by Stan Lee and Steve Ditko. His real name is Stephen Strange, a former neurosurgeon who becomes a powerful sorcerer and protector of Earth against supernatural threats."
    },
    {
        title: 'Ant-Man', image: 'images/antman.jpg', description: "Ant-Man is a Marvel Comics superhero created by Stan Lee and Jack Kirby. His real name is Hank Pym, a scientist who invents a substance that allows him to shrink to the size of an ant, while also increasing his strength."
    }
];

const clickMe = () => {
    console.log('clickMe clicked');
}

const addCards = (items) => {
    console.log(items);
    items.forEach(item => {
        let itemToAppend = '<div class="col s4 center-align"> <div class="card medium"><div class="card-image waves-effect waves-block waves-light"><img class="activator" src="'+ item.image +'"></img></div><div class="card-content"><span class="card-title activator">'+ item.title +'<i class="material-icons right">more_vert</i></span></div><div class="card-reveal"><span class="card-title title-text">'+item.title+'<i class="material-icons right">close</i></span><p class="card-text  left-align">'+item.description+'</p></div></div></div>';
        $('#card-section').append(itemToAppend);
    });
}

const submitForm = () => {
    let formData = {};
    formData.first_name = $('#first_name').val();
    formData.last_name = $('#last_name').val();
    formData.email = $('#email').val();
    formData.rating = $('#rate').val()
    formData.character = $('#like').val()

    console.log('form data: ', formData);
}

$(document).ready(function(){
    $('.materialboxed').materialbox();
    $('.modal').modal();

    addCards(cardList);
    $('#formSubmit').click(()=>{
        submitForm();
    })
});


// Tooltip 

$(document).ready(function(){
    $('.tooltipped').tooltip();
});

// select
$(document).ready(function(){
    $('select').formSelect();
});
        
document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.materialboxed');
    var instances = M.Materialbox.init(elems);
  });
