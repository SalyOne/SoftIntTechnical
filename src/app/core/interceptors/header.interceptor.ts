import { HttpInterceptorFn } from '@angular/common/http';

export const headerInterceptor: HttpInterceptorFn = (req, next) => {
   const apiKey = "5ee124894emshb5e465e2358bed7p13972bjsn02b30afadadc"
    req = req.clone({
      setHeaders: {
        'X-RapidAPI-Key': apiKey,
        'x-rapidapi-host': 'online-movie-database.p.rapidapi.com'
      }
    })

  return next(req);
};
