export class FipeAPI {
  constructor() {
    this.vehicleType = null;
    this.brandCode = null;
    this.modelCode = null;
    this.yearCode = null;
    this.token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI5MjIxYWZmNS03YzhiLTQ5OTUtOTYwYy03YTA4YmIxNDhhMzQiLCJlbWFpbCI6ImxvcnJhaW5lbW1lcmlja0BnbWFpbC5jb20iLCJpYXQiOjE3MjkzNjQ5MzN9.mILETFAk3Sx-7pIhGJKbw62F3SWTgbJTIEiAm_3HFwA'; // Adicione o token aqui
  }

  setVehicleType(vehicleType) {
    this.vehicleType = vehicleType;
  }

  setBrandCode(brandCode) {
    this.brandCode = brandCode;
  }

  setModelCode(modelCode) {
    this.modelCode = modelCode;
  }

  setYearCode(yearCode) {
    this.yearCode = yearCode;
  }

  async getBrandList() {
    if (!this.vehicleType) {
      throw new Error("O tipo de veículo não foi definido.");
    }
    try {
      const response = await fetch(`https://parallelum.com.br/fipe/api/v1/${this.vehicleType}/marcas`, {
        headers: {
          'X-Subscription-Token': `${this.token}`
        }
      });
      const data = await response.json();
      return data;
    } catch (error) {
      console.log("Erro - ", error);
    }
  }

  async getModelList() {
    if (!this.vehicleType || !this.brandCode) {
      throw new Error("O tipo de veículo ou o código da marca não foi definido.");
    }
    const response = await fetch(`https://parallelum.com.br/fipe/api/v1/${this.vehicleType}/marcas/${this.brandCode}/modelos`, {
      headers: {
        'X-Subscription-Token': `${this.token}`
      }
    });
    const data = await response.json();
    return data;
  }

  async getYearList() {
    if (!this.vehicleType || !this.brandCode || !this.modelCode) {
      throw new Error("O tipo de veículo, o código da marca ou o código do modelo não foi definido.");
    }
    const response = await fetch(`https://parallelum.com.br/fipe/api/v1/${this.vehicleType}/marcas/${this.brandCode}/modelos/${this.modelCode}/anos`, {
      headers: {
        'X-Subscription-Token': `${this.token}`
      }
    });
    const data = await response.json();
    return data;
  }

  async getPrice() {
    if (!this.vehicleType || !this.brandCode || !this.modelCode || !this.yearCode) {
      throw new Error("Todos os parâmetros devem ser definidos (tipo de veículo, código da marca, modelo e ano).");
    }
    const response = await fetch(`https://parallelum.com.br/fipe/api/v1/${this.vehicleType}/marcas/${this.brandCode}/modelos/${this.modelCode}/anos/${this.yearCode}`, {
      headers: {
        'X-Subscription-Token': `${this.token}`
      }
    });
    const data = await response.json();
    return data;
  }
}
