import {Component, AfterViewInit, ElementRef, OnDestroy, Directive, Renderer} from '@angular/core';
import {Router} from '@angular/router';

@Directive({
  selector: '[exploreRenderer]'
})

declare var window:any;

@Component({
  selector: 'app-comments-fb',
  templateUrl: './comments-fb.component.html'
})

export class CommentsFbComponent implements AfterViewInit, OnDestroy {

  renderer:any;
  currentURL:string;
  nativeElement:any;
  elementRef:ElementRef;

  constructor(private renderer:Renderer,
              private router:Router,
              public elementRef:ElementRef) {
    this.nativeElement = elementRef.nativeElement;

  }

  ngAfterViewInit() {
    this.initFBComments();
  }

  ngOnDestroy() {
    delete window.FB;
  }

  initFBComments() {

    this.currentURL = `${window.location.origin}/${this.router.url}`;
    this.renderer.setElementProperty(this.elementRef.nativeElement, 'innerHTML', '<div id="fb-root"></div><div class="fb-comments" data-href="' + this.currentURL + '" data-colorscheme="light" data-width="100%" data-numposts="10"></div>') ;

    (function (d, s, id) {
      var js, fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) {
        try {
          window.FB.XFBML.parse();
        } catch (e) {

        }
      }

      js = d.createElement(s);
      js.id = id;
      js.src = 'https://connect.facebook.net/es_LA/sdk.js#xfbml=1&version=v3.0&appId=534056950322187&autoLogAppEvents=1';
      fjs.parentNode.insertBefore(js, fjs);
    }(document, 'script', 'facebook-jssdk'));
  }

}
