import { HttpClient, HttpEvent, HttpHandler, HttpHeaders, HttpInterceptor, HttpRequest, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Order } from './order.model';
import { Product } from './product.model';
import { map } from 'rxjs/operators';
const PROTOCAL = 'http';
const PORT = 3500;

@Injectable()
export class RestDataSource implements HttpInterceptor {
    baseUrl?: string;
    static auth_token?: string | null = '';

    httpOptions = {
        headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    }


    constructor(private http: HttpClient) {
        this.baseUrl = `${PROTOCAL}://${location.hostname}:${PORT}`
    }

    authenticate(user: string, pass: string): Observable<boolean> {
        return this.http.post(this.baseUrl + '/login', {
            name: user,
            password: pass
        }, {
            observe: 'response',
            headers: this.httpOptions.headers
        }).pipe(map((response: HttpResponse<any>) => {
            let r = response.body;
            RestDataSource.auth_token = r.success ? r.token : null;
            return r.success;
        }))
    }

    getProducts(): Observable<Product[]> {
        return this.http.get<Product[]>(this.baseUrl + '/products')
    }

    saveOrder(order: Order): Observable<Order> {
        return this.http.post<Order>(this.baseUrl + '/orders', order)
    }

    saveProduct(product: Product): Observable<Product> {
        return this.http.post(this.baseUrl + '/products', product);
    }

    updateProduct(product: Product): Observable<Product> {
        return this.http.put(`${this.baseUrl}/products/${product.id}`, product);
    }

    deleteProduct(id: number): Observable<Product> {
        return this.http.delete(`${this.baseUrl}/products/${id}`)
    }

    getOrders(): Observable<Order[]> {
        return this.http.get<Order[]>(`${this.baseUrl}/orders`)
    }

    deleteOrder(id: number): Observable<Order> {
        return this.http.delete<Order>(`${this.baseUrl}/orders/${id}`)
    }

    updateOrder(order: Order): Observable<Order> {
        return this.http.put<Order>(`${this.baseUrl}/orders/${order.id}`, order)
    }


    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const authReq = req.clone(
            { setHeaders: { Authorization: 'Bearer '+RestDataSource.auth_token || '' } }
        );
        return next.handle(authReq);
    }

}