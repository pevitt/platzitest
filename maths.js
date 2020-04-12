export const sumar = (a, b) => {
    return a + b;
}

export const multiplicar = (a, b) => {
    return a * b;
}

export const restar = (a, b) => {
    return a - b;
}

export const dividir = (a,b) => {
    return a / b;
}



export const environment = {
  production: false,
  imtercomCode: 'fi1cysre',
  baseUrl: 'http://localhost:8000',
  urlFront:'http://localhost:4200/',
  s3Url:'https://s3-us-west-2.amazonaws.com/bsu-dev/media/'
};


constructor(private http:HttpClient) {
    this.urlApi = environment.production ? environment.baseUrl:environment.baseUrl;
    this.urlAppBanregio = environment.production ? environment.urlFront:environment.urlFront;
  }
 getApiUrl(){
    return `${this.urlApi}/api`;
  }