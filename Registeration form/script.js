function addProfile() {
    document.getElementsByClassName('pp')[0].style.display='block';
    var email = document.getElementById('email').value;
    var name = document.getElementById('name').value;
    var age = document.getElementById('age').value;
    var contact = document.getElementById('contact').value;
    var address = document.getElementById('address').value;
    var picture = document.getElementById('picture').files[0];
    
    if (name && email && age && contact && address) {
      var profileCards = document.getElementById('profile-cards');
      var profileCard = document.createElement('div');
      profileCard.className = 'profile-card';
      profileCards.appendChild(profileCard);
      
      var profilePicture = document.createElement('img');
      profilePicture.src = URL.createObjectURL(picture);
      profileCard.appendChild(profilePicture);
      
      var profileName = document.createElement('p');
      profileName.textContent ='Name: '+ name;
      profileCard.appendChild(profileName);
      
      var profileEmail = document.createElement('p');
      profileEmail.textContent ='E-mail: '+ email;
      profileCard.appendChild(profileEmail);
      
      var profileAge = document.createElement('p');
      profileAge.textContent = 'Age: ' + age;
      profileCard.appendChild(profileAge);
      
      var profileContact = document.createElement('p');
      profileContact.textContent ='Contact: '+ contact;
      profileCard.appendChild(profileContact);
      
      var profileAddress = document.createElement('p');
      profileAddress.textContent ='Address: '+ address;
      profileCard.appendChild(profileAddress);
      
      document.getElementById('name').value = '';
      document.getElementById('email').value = '';
      document.getElementById('age').value = '';
      document.getElementById('contact').value = '';
      document.getElementById('address').value = '';
      document.getElementById('picture').value = '';
    }
  }