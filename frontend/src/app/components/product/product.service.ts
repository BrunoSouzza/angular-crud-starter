import { Product } from "./product.model"
import { HttpClient } from "@angular/common/http"
import { Injectable } from "@angular/core"
import { MatSnackBar } from "@angular/material/snack-bar"
import { EMPTY, Observable } from "rxjs"
import { catchError, map } from "rxjs/operators"

@Injectable({
  providedIn: "root",
})
export class ProductService {
  baseUrl = "http://localhost:9000"

  constructor(private snackBar: MatSnackBar, private http: HttpClient) {}

  showMessage(msg: string, isError: boolean = false): void {
    this.snackBar.open(msg, "X", {
      duration: 3000,
      horizontalPosition: "right",
      verticalPosition: "top",
      panelClass: isError ? ["msg-erro"] : ["msg-success"],
    })
  }

  handlerError(e: any): Observable<any> {
    this.showMessage("Ocorreu um erro!", true)
    return EMPTY
  }

  create(product: Product): Observable<Product> {
    return this.http.post<Product>(`${this.baseUrl}/products`, product).pipe(
      map((obj) => obj),
      catchError((e) => this.handlerError(e))
    )
  }

  read(): Observable<Product[]> {
    return this.http.get<Product[]>(`${this.baseUrl}/products`).pipe(
      map((obj) => obj),
      catchError((e) => this.handlerError(e))
    )
  }

  readById(id: Number): Observable<Product> {
    return this.http.get<Product>(`${this.baseUrl}/products/${id}`).pipe(
      map((obj) => obj),
      catchError((e) => this.handlerError(e))
    )
  }

  update(product: Product): Observable<Product> {
    return this.http
      .put<Product>(`${this.baseUrl}/products/${product.id}`, product)
      .pipe(
        map((obj) => obj),
        catchError((e) => this.handlerError(e))
      )
  }

  delete(id: Number): Observable<Product> {
    return this.http.delete<Product>(`${this.baseUrl}/products/${id}`).pipe(
      map((obj) => obj),
      catchError((e) => this.handlerError(e))
    )
  }
}
