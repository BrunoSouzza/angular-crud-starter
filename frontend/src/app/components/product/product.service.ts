import { Injectable } from "@angular/core"

@Injectable({
  providedIn: "root",
})
export class ProductService {
  constructor() {}

  caiuAqui(msg: string): void {
    alert("Chamou o Service")
  }
}
