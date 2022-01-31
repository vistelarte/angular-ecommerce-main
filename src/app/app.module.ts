import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { StickyNavModule } from 'ng2-sticky-nav';
import { TabsModule } from 'ngx-tabset';
import { NgxScrollTopModule } from 'ngx-scrolltop';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LightboxModule } from 'ngx-lightbox';
import { AccordionModule } from 'ngx-accordion';
import { NgxSliderModule } from '@angular-slider/ngx-slider';
import { HttpClientModule } from '@angular/common/http';
import { MarkdownModule } from 'ngx-markdown';
import { NgxPaginationModule } from 'ngx-pagination';
import { NotifierModule } from 'angular-notifier';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './components/common/footer/footer.component';
import { SubscribeComponent } from './components/common/subscribe/subscribe.component';
import { BlogComponent } from './components/common/blog/blog.component';
import { PartnerComponent } from './components/common/partner/partner.component';
import { FeedbackComponent } from './components/common/feedback/feedback.component';
import { FacilityComponent } from './components/common/facility/facility.component';
import { NavbarComponent } from './components/common/navbar/navbar.component';
import { CollectionComponent } from './components/common/collection/collection.component';
import { FeedbackPageComponent } from './components/pages/feedback-page/feedback-page.component';
import { FaqPageComponent } from './components/pages/faq-page/faq-page.component';
import { DeliveryReturnsPageComponent } from './components/pages/delivery-returns-page/delivery-returns-page.component';
import { ShippingPageComponent } from './components/pages/shipping-page/shipping-page.component';
import { PrivacyPolicyPageComponent } from './components/pages/privacy-policy-page/privacy-policy-page.component';
import { TermsConditionsPageComponent } from './components/pages/terms-conditions-page/terms-conditions-page.component';
import { AboutPageComponent } from './components/pages/about-page/about-page.component';
import { ContactPageComponent } from './components/pages/contact-page/contact-page.component';
import { MyAccountPageComponent } from './components/pages/my-account-page/my-account-page.component';
import { NotFoundComponent } from './components/common/not-found/not-found.component';
import { BlogDetailsPageComponent } from './components/pages/blog-details-page/blog-details-page.component';
import { TeamComponent } from './components/common/team/team.component';
import { ProductsDetailsPageComponent } from './components/pages/products-details-page/products-details-page.component';
import { CartPageComponent } from './components/pages/cart-page/cart-page.component';
import { CheckoutPageComponent } from './components/pages/checkout-page/checkout-page.component';
import { WishlistPageComponent } from './components/pages/wishlist-page/wishlist-page.component';
import { ComparePageComponent } from './components/pages/compare-page/compare-page.component';
import { HomePageComponent } from './components/pages/home-page/home-page.component';
import { BannerComponent } from './components/pages/home-page/banner/banner.component';
import { BestSellingProductsComponent } from './components/common/best-selling-products/best-selling-products.component';
import { CollectionAdsComponent } from './components/common/collection-ads/collection-ads.component';
import { GalleryPageComponent } from './components/pages/gallery-page/gallery-page.component';
import { BlogPageComponent } from './components/pages/blog-page/blog-page.component';
import { ShopPageComponent } from './components/pages/shop-page/shop-page.component';
import { TopHeaderComponent } from './components/common/top-header/top-header.component';
import { NewArrivalProductsComponent } from './components/common/new-arrival-products/new-arrival-products.component';
import { SuccessOrderPageComponent } from './components/pages/success-order-page/success-order-page.component';
import { OrderHistoryPageComponent } from './components/pages/order-history-page/order-history-page.component';

@NgModule({
    declarations: [
        AppComponent,
        FooterComponent,
        SubscribeComponent,
        BlogComponent,
        PartnerComponent,
        FeedbackComponent,
        FacilityComponent,
        NavbarComponent,
        CollectionComponent,
        FeedbackPageComponent,
        FaqPageComponent,
        DeliveryReturnsPageComponent,
        ShippingPageComponent,
        PrivacyPolicyPageComponent,
        TermsConditionsPageComponent,
        AboutPageComponent,
        ContactPageComponent,
        MyAccountPageComponent,
        NotFoundComponent,
        BlogDetailsPageComponent,
        TeamComponent,
        ProductsDetailsPageComponent,
        CartPageComponent,
        CheckoutPageComponent,
        WishlistPageComponent,
        ComparePageComponent,
        HomePageComponent,
        BannerComponent,
        BestSellingProductsComponent,
        CollectionAdsComponent,
        GalleryPageComponent,
        BlogPageComponent,
        ShopPageComponent,
        TopHeaderComponent,
        NewArrivalProductsComponent,
        SuccessOrderPageComponent,
        OrderHistoryPageComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        CarouselModule,
        BrowserAnimationsModule,
        StickyNavModule,
        NgxScrollTopModule,
        TabsModule,
        NgbModule,
        FormsModule,
        ReactiveFormsModule,
        LightboxModule,
        AccordionModule,
        NgxSliderModule,
        HttpClientModule,
        MarkdownModule.forRoot(),
        NgxPaginationModule,
        NotifierModule,
    ],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
