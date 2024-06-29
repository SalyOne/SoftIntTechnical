import { HttpInterceptorFn } from '@angular/common/http';

export const headerInterceptor: HttpInterceptorFn = (req, next) => {

    req = req.clone({
      setHeaders: {
        'X-RapidAPI-Key':'5ee124894emshb5e465e2358bed7p13972bjsn02b30afadadc',
        'x-rapidapi-host': 'online-movie-database.p.rapidapi.com'
      }
    })

  return next(req);
};
