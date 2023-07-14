

window.addEventListener("load", (event) => {
  // functionality scripts added here

  // Accord-ion
  var acc = document.getElementsByClassName("accordion");
  var i;

  for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function () {
      this.classList.toggle("active");
      var panel = this.nextElementSibling;
      if (panel.style.maxHeight) {
        panel.style.maxHeight = null;
      } else {
        panel.style.maxHeight = panel.scrollHeight + "px";
      }
    });
  }



  // Sliders
  let slideIndex = 0;
  let slides = document.getElementsByClassName("mySlides");

  if (Object.keys(slides).length != 0) {
    showSlides();
  }


  function showSlides() {
    let i;
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) { slideIndex = 1 }
    slides[slideIndex - 1].style.display = "block";
    setTimeout(showSlides, 2000); // Change image every 2 seconds
  }

  // Chart Of MCR setlist ...
  const ctx3 = document.getElementById('chartMCRSET')

  new Chart(ctx3, {
    type: 'line',
    data: {
      labels: ["I'm Not Okay (I Promise)", "Helena", "Give 'Em Hell,Kid'", "Welcome To The Black Parade", "You Know What They Do To Guys Lie Us in Prison", "Teenagers", "Mama", "Famous Last Words", "Thank You for the Venom", "Cancer", "Cemetery Drive", "House of Wolves", "The Ghost of You", "Our Lady of Sorrows", "Dead!", "This Is How I Disappear", "Na Na Na (Na Na Na Na Na Na Na Na Na)", "Vampires Will Never Hurt You", "I Don't Love You", "Headfirst For Halos"],
      datasets: [{
        label: '# of Times Played',
        data: [684, 668, 513, 466, 447, 443, 438, 411, 392, 358, 333, 326, 286, 272, 246, 245, 224, 212, 204, 180],
        tension: 0.3
      }]
    },
    options: {
      animations: {
        tension: {
          duration: 1000,
          easing: 'linear',
          from: 5,
          to: 0.3,
          loop: false
        }
      },
      scales: {
        y: {
          beginat0: true
        }
      }
    }
  });

  var mapContainerHome = document.getElementById('map');
  var mapContainerLoveJoy = document.getElementById('mapLoveJoy');
  var mapContainerArtcticMonkeys = document.getElementById('mapAM');
  var mapContainerRomance = document.getElementById('mapRomance.0');

  if (mapContainerHome !== null) {
    assignMapHome();
  }
  else if (mapContainerLoveJoy !== null) {
    assignMapLoveJoy();

  }
  else if (mapContainerArtcticMonkeys !== null) {
    assignMapAM();

  }
  else if (mapContainerRomance !== null) {
    assignMapRomance();

  }


  //  Chart With 3 Bands (Concert)

  var container = document.getElementById('chartTripContainer');

  if (container !== null) {
    const ctx2 = document.getElementById('chartTrip')

    const mixedchart = new Chart(ctx2, {
      data: {
        datasets: [{
          type: 'line',
          label: 'My Chemical Romance Line',
          data: ['1', '64', '164', '181', '240', '60', '166', '44', '4', '28', '128', '10', '0', '0', '0', '1', '61', '9'],
          fill: false,
          borderColor: 'rgb(255, 0, 0)'
        }, {
          type: 'line',
          label: 'Arctic Monkeys Line',
          data: ['0', '0', '5', '22', '99', '124', '132', '0', '89', '34', '100', '67', '94', '89', '80', '16', '36', '51'],
          fill: false,
          borderColor: 'rgb(0, 255, 0)'
        }, {
          type: 'line',
          label: 'LoveJoy Line',
          data: ['0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '22', '44'],
          fill: false,
          borderColor: 'rgb(0, 0, 255)'
        }, {
          type: 'bar',
          label: 'My Chemical Romance Bar',
          data: ['1', '64', '164', '181', '240', '60', '166', '44', '4', '28', '128', '10', '0', '0', '0', '1', '61', '9'],
          borderColor: 'rgb(255, 0, 0)',
          backgroundColor: 'rgba(255, 0, 0, 0.2)'
        }, {
          type: 'bar',
          label: 'Arctic Monkeys Bar',
          data: ['0', '0', '5', '22', '99', '124', '132', '0', '89', '34', '100', '67', '94', '89', '80', '16', '36', '51'],
          borderColor: 'rgb(0, 255, 0)',
          backgroundColor: 'rgba(0, 255, 0, 0.2)'
        }, {
          type: 'bar',
          label: 'LoveJoy Bar',
          data: ['0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '22', '44'],
          borderColor: 'rgb(0, 0, 255)',
          backgroundColor: 'rgb(0, 0, 255, 0.2)'
        }],
        labels: ['2001', '2002', '2003', '2004', '2005', '2006', '2007', '2008', '2009', '2010', '2011', '2012', '2013', '2014', '2018', '2019', '2022', '2023']
      },
      options: {
        //animations: {
        //tension: {
        //duration: 1000,
        //easing: 'linear',
        //from: 5,
        //to: 0.3,
        //loop: false
        //}
        //},
        scales: {
          y: {
            min: 0,
            max: 250
          }
        }
      }
    });
  }

});



//  Map With all 3 Bands
function assignMapHome() {
  var map = L.map('map', {
    zoomControl: false
  }).setView([40.844481, -74.072388], 11);

  L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
  }).addTo(map);

  var markerMCR = L.marker([40.939631360411184, -73.9600942603997]).addTo(map);

  var circleMCR = L.circle([40.724053, -74.176826], {
    color: 'red',
    fillColor: '#f03',
    fillOpacity: 0.5,
    radius: 2500
  }).addTo(map);

  markerMCR.bindPopup("<h1> First Shows</h1><br><p>This is the place where MCR performed some of their first ever perfomance with only One recorded. <a href=https://youtu.be/3aNvtYNF5TQ>First Recorded Show</a>")

  circleMCR.bindPopup("<h1>Place Of Origin</h1><br><p>This is where MCR Originated from Forming there band shortly after The september 11 attacks on the twin towers.</p>")

  var MCR = {
    lat: 40.844481,
    lng: -74.072388,
    zoom: 11
  };

  var markerLVJY = L.marker([50.82491477729966, -0.14316717288251338]).addTo(map);

  var circleLVJY = L.circle([50.82128604555225, -0.14069247937292914], {
    color: 'red',
    fillColor: '#f03',
    fillOpacity: 0.5,
    radius: 500
  }).addTo(map);


  markerLVJY.bindPopup("<h1> First Shows</h1><br><p>This is The location of the hope and ruin where lovejoy performed there first ever gig.<a href=https://youtu.be/vZfWRahnTrA>First Gig Recording</a>")

  circleLVJY.bindPopup("<h1>Place Of Origin</h1><br><p>This is where LoveJoy Originated from forming in 2021.</p>")


  var LVJY = {
    lat: 50.827778,
    lng: -0.152778,
    zoom: 13
  };

  var markerAM = L.marker([53.38180207743914, -1.474924586344378]).addTo(map);

  var circleAM = L.circle([53.47606643097969, -1.4910560495037224], {
    color: 'red',
    fillColor: '#f03',
    fillOpacity: 0.5,
    radius: 1750
  }).addTo(map);

  markerAM.bindPopup("<h1> First Shows</h1><br><p>This is The location of the Grapes where Arctic Monkeys performed there first ever gigs.<a href=https://www.youtube.com/watch?v=aH02BcCpI_c>Early Gigs Recording</a>")

  circleAM.bindPopup("<h1>Place Of Origin</h1><br><p>This is HighGreen in Sheffeild where the arctic monkeys originated from forming in 2002.</p>")


  var AM = {
    lat: 53.44711160590945,
    lng: -1.4948967734204177,
    zoom: 12
  };

  // make a bar with the buttons
  var zoomBar = L.easyBar([
    L.easyButton('<big>+</big>', function (control, map) { map.setZoom(map.getZoom() + 1); }),
    L.easyButton('<small>MCR</small>', function (control, map) { map.setView([MCR.lat, MCR.lng], MCR.zoom); }),
    L.easyButton('<small>LVJY</small>', function (control, map) { map.setView([LVJY.lat, LVJY.lng], LVJY.zoom); }),
    L.easyButton('<small>AM</small>', function (control, map) { map.setView([AM.lat, AM.lng], AM.zoom); }),
    L.easyButton('<big>-</big>', function (control, map) { map.setZoom(map.getZoom() - 1); }),
  ]);

  // add it to the map
  zoomBar.addTo(map);
}

function assignMapLoveJoy() {

  var LVJYa = {
    lat: 50.827778,
    lng: -0.152778,
    zoom: 13
  };

  var map = L.map('mapLoveJoy', {
  }).setView([LVJYa.lat, LVJYa.lng], LVJYa.zoom);

  L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
  }).addTo(map);

  var markerLVJYa = L.marker([50.82491477729966, -0.14316717288251338]).addTo(map);

  var circleLVJYa = L.circle([50.82128604555225, -0.14069247937292914], {
    color: 'red',
    fillColor: '#f03',
    fillOpacity: 0.5,
    radius: 500
  }).addTo(map);


  markerLVJYa.bindPopup("<h1> First Shows</h1><br><p>This is The location of the hope and ruin where lovejoy performed there first ever gig.<a href=https://youtu.be/vZfWRahnTrA>First Gig Recording</a>")

  circleLVJYa.bindPopup("<h1>Place Of Origin</h1><br><p>This is where LoveJoy Originated from forming in 2021.</p>")

}

function assignMapRomance() {

  var MCRa = {
    lat: 40.844481,
    lng: -74.072388,
    zoom: 11
  };

  var map = L.map('mapRomance', {
  }).setView([MCRa.lat, MCRa.lng], MCRa.zoom);

  L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
  }).addTo(map);

  var markerMCRa = L.marker([40.939631360411184, -73.9600942603997]).addTo(map);

  var circleMCRa = L.circle([40.724053, -74.176826], {
    color: 'red',
    fillColor: '#f03',
    fillOpacity: 0.5,
    radius: 2500
  }).addTo(map);

  markerMCRa.bindPopup("<h1> First Shows</h1><br><p>This is the place where MCR performed some of their first ever perfomance with only One recorded. <a href=https://youtu.be/3aNvtYNF5TQ>First Recorded Show</a>")

  circleMCRa.bindPopup("<h1>Place Of Origin</h1><br><p>This is where MCR Originated from Forming there band shortly after The september 11 attacks on the twin towers.</p>")

}

function assignMapAM() {

  var AMa = {
    lat: 53.44711160590945,
    lng: -1.4948967734204177,
    zoom: 12
  };

  var map = L.map('mapAM', {
  }).setView([AMa.lat, AMa.lng], AMa.zoom);

  L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
  }).addTo(map);

  var markerAMa = L.marker([53.38180207743914, -1.474924586344378]).addTo(map);

  var circleAMa = L.circle([53.47606643097969, -1.4910560495037224], {
    color: 'red',
    fillColor: '#f03',
    fillOpacity: 0.5,
    radius: 1750
  }).addTo(map);

  markerAMa.bindPopup("<h1> First Shows</h1><br><p>This is The location of the Grapes where Arctic Monkeys performed there first ever gigs.<a href=https://www.youtube.com/watch?v=aH02BcCpI_c>Early Gigs Recording</a>")

  circleAMa.bindPopup("<h1>Place Of Origin</h1><br><p>This is HighGreen in Sheffeild where the arctic monkeys originated from forming in 2002.</p>")

}

// Tabsssss

function openCity(evt, cityName) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(cityName).style.display = "block";
  evt.currentTarget.className += " active";
}

var modal = document.getElementById("myModal");
function maybeValidEmail(email) { return /^\S+@\S+\.\S+$/.test(email); }
function formSubmit() {

  firstName = document.getElementById('fname').value;
  lastName = document.getElementById('lname').value;
  email = document.getElementById('email').value;
  information = document.getElementById('information').value;

  console.log(firstName + lastName + email + information)
  if (firstName == "") {
    alert('Required field missing');
  }
  else if (lastName == "") {
    alert('Required field missing');
  }
  else if (email == "") {
    alert('Required field missing');
  }
  else if (information == "") {
    alert('Required field missing');
  }
  else {
    if (email.match(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/)) {
      var modal = document.getElementById('myModal');
      modal.style.display = "block";
    } else {
      alert('Email is in a wrong format');
    }


  }


}

function closeModal() {

  console.log('test2');
  var modal = document.getElementById('myModal');

  modal.style.display = "none";
}
// Get the mo

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

