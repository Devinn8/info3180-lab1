import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButtons, IonButton} from '@ionic/react';
import React from 'react';
import { Link } from 'react-router-dom'; // If you're using React Router
import './Home.css';

const Home: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Scrum 9</IonTitle>
          <IonButtons slot="end">
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
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Home</IonTitle>
          </IonToolbar>
        </IonHeader>
      Home </IonContent>
    </IonPage>
  );
};

export default Home;