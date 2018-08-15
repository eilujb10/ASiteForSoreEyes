let url = '../sitemap.json';
fetch(url)
  .then(response => response.json())
  .then(data => {
    document.getElementById('homeLink').href = data.index.url;
    document.getElementById('home').innerHTML= data.index.name;
    document.getElementById('donateLink').href = data.donate.url;
    document.getElementById('donate').innerHTML= data.donate.name;
    document.getElementById('admissionLink').href = data.admission.url;
    document.getElementById('admission').innerHTML= data.admission.name;
    document.getElementById('googleMapLink').href = data.googleMap.url;
    document.getElementById('googleMap').innerHTML= data.googleMap.name;
    document.getElementById('sponsorsLink').href = data.sponsors.url;
    document.getElementById('sponsors').innerHTML= data.sponsors.name;
    document.getElementById('sponsor1Link').href = data.sponsor1.url;
    document.getElementById('sponsor1').innerHTML= data.sponsor1.name;
    document.getElementById('sponsor2Link').href = data.sponsor2.url;
    document.getElementById('sponsor2').innerHTML= data.sponsor2.name;
    document.getElementById('sponsor3Link').href = data.sponsor3.url;
    document.getElementById('sponsor3').innerHTML= data.sponsor3.name;
    document.getElementById('sponsor4Link').href = data.sponsor4.url;
    document.getElementById('sponsor4').innerHTML= data.sponsor4.name;
    document.getElementById('sponsor5Link').href = data.sponsor5.url;
    document.getElementById('sponsor5').innerHTML= data.sponsor5.name;
  })
  .catch(e => console.log(e));