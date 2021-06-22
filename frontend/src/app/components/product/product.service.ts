import { Product } from "./product.model"
import { HttpClient } from "@angular/common/http"
import { Injectable } from "@angular/core"
import { MatSnackBar } from "@angular/material/snack-bar"
import { Observable } from "rxjs"

@Injectable({
  providedIn: "root",
})
export class ProductService {
  baseUrl = "http://localhost:9000"

  constructor(private snackBar: MatSnackBar, private http: HttpClient) {}

  showMessage(msg: string): void {
    this.snackBar.open(msg, "X", {
      duration: 3000,
      horizontalPosition: "right",
      verticalPosition: "top",
    })
  }

  create(product: Product): Observable<Product> {
    return this.http.post<Product>(`${this.baseUrl}/products`, product)
  }

  read(): Observable<Product[]> {
    return this.http.get<Product[]>(`${this.baseUrl}/products`)
  }

  readById(id: Number): Observable<Product> {
    return this.http.get<Product>(`${this.baseUrl}/products/${id}`)
  }

  update(product: Product): Observable<Product> {
    return this.http.put<Product>(
      `${this.baseUrl}/products/${product.id}`,
      product
    )
  }
}
