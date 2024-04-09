import React from 'react';
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonList,
  IonItem,
  IonAvatar,
  IonTextarea,
  IonButton,
  IonIcon,
  IonFooter,
  IonText,
} from '@ionic/react';
import { camera, videocam, albums, notifications, chatbox, person } from 'ionicons/icons';
import './home.css';

const Home: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Home</IonTitle>
        </IonToolbar>
        
        
      </IonHeader>
      <IonContent fullscreen>
        {/* Post Section */}
        <IonList>
          {/* Post Status */}
          <IonItem>
            <IonAvatar slot="start">
              <img src="../src/assets/img/ArmarJun (1).jpg" alt="profile" />
            </IonAvatar>
            <IonTextarea auto-grow placeholder="What's on your mind?" />
          </IonItem>
          

        </IonList>

        
        <IonFooter>
          <IonToolbar>
            <IonButton color="danger" slot="start">
              <IonIcon icon={camera} />
              <IonText>Photos</IonText>
            </IonButton>
            <IonButton color="success" slot="start">
              <IonIcon icon={videocam} />
              <IonText>Videos</IonText>
            </IonButton>
            <IonButton color="success" slot="start">
              <IonIcon icon={albums} />
              <IonText>Reels</IonText>
            </IonButton>
          </IonToolbar>
          HI MY NAME IS ARMAR JUN ACUZAR<br></br>THIS IS MY HOME PAGE
        </IonFooter>

      </IonContent>
    </IonPage>
  );
};

export default Home;