import { IonContent, IonCard, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCardContent, IonGrid, IonRow, IonCol, IonButton, IonButtons, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import React from 'react';
import './Products.css';
import { Link } from 'react-router-dom';

const uploaded_images = {
    1: {
        'filename': 'src/images/Balloon.jpg',
        'title': 'Hot Air Balloon',
        'price': 19999.99,
        'description': 'Ever wondered what its like to touch the clouds? Well we have the answer. Our air balloon. is a luxurious sight-seeing vehicle. Ensure you do not use it on extremely windy or rainy days'
    },
    2: {
        'filename': 'src/images/Mist.jpg',
        'title': 'Misty Forest',
        'price': 75.00,
        'description': 'This is quite the conversation starter. We guarantee that your guests will be intrigued by this fascinating image. '
    },
    3: {
        'filename': 'src/images/Beachball.jpg',
        'title': 'Beachball',
        'price': 29.99,
        'description': 'Need to liven up your next beach or pool trip? Well, take one of our new and improved beachballs with you. Its fun for everyone.'
    },
    4: {
        'filename': 'src/images/Flowers.jpg',
        'title': 'Flowers',
        'price': 14.99,
        'description': 'Have an important celebration coming up? Want to be extra romantic tonight? Or you just wanna get out of the doghouse? Try using one of our handpicked bouquet of flowers. They should help ;)'
    }
   
};

const Products: React.FC = () => {
    return (
      <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Scrum 9</IonTitle>
          <IonButtons slot="end">
          <Link to="/Home">
            <IonButton>
              Home
            </IonButton>
          </Link>
          <Link to="/About">
            <IonButton>
              About
            </IonButton>
          </Link>
          <Link to="/Products">
            <IonButton>
              Products
            </IonButton>
          </Link>
        </IonButtons>

        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonGrid>
          <IonRow>
            {Object.values(uploaded_images).map(imageInfo => (
              <IonCol size="12" size-md="6" key={imageInfo.title}>
                <IonCard className="ion-card">
                  <img src={imageInfo.filename} alt={imageInfo.title} className="product-image"/>
                  <IonCardHeader>
                    <IonCardSubtitle>Price: ${imageInfo.price}</IonCardSubtitle>
                    <IonCardTitle className='title'>{imageInfo.title}</IonCardTitle>
                  </IonCardHeader>
                  <IonCardContent>
                    {imageInfo.description}
                  </IonCardContent>
                </IonCard>
              </IonCol>
            ))}
          </IonRow>
        </IonGrid>
      </IonContent>
      </IonPage>
    );
  };
  
  export default Products;