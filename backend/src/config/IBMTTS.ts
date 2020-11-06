import TextToSpeech from 'ibm-watson/text-to-speech/v1';
import { IamAuthenticator } from 'ibm-watson/auth';
import dotenv from 'dotenv';

dotenv.config();

export default class IBMTTS {
  textToSpeech: TextToSpeech;

  constructor() {
    this.textToSpeech = new TextToSpeech({
      authenticator: new IamAuthenticator({ apikey: process.env.IBM_API_KEY! }),
      url: process.env.IBM_API_URL,
    });
  }

  synthesize(text: string, voice?: string) {
    const params = {
      text,
      voice,
      accept: 'audio/wav',
    };

    /*
    return this.textToSpeech
      .synthesize(params)
      .then(res => {
        return res.result;
      })
      .catch(error => console.log(error));
      */
    return this.textToSpeech.synthesize(params).then(response => {
      const audio: any = response.result;
      return this.textToSpeech.repairWavHeaderStream(audio);
    });
  }
}
