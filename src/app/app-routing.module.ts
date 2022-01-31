import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './components/common/not-found/not-found.component';
import { AboutPageComponent } from './components/pages/about-page/about-page.component';
import { BlogDetailsPageComponent } from './components/pages/blog-details-page/blog-details-page.component';
import { BlogPageComponent } from './components/pages/blog-page/blog-page.component';
import { CartPageComponent } from './components/pages/cart-page/cart-page.component';
import { CheckoutPageComponent } from './components/pages/checkout-page/checkout-page.component';
import { ComparePageComponent } from './components/pages/compare-page/compare-page.component';
import { ContactPageComponent } from './components/pages/contact-page/contact-page.component';
import { DeliveryReturnsPageComponent } from './components/pages/delivery-returns-page/delivery-returns-page.component';
import { FaqPageComponent } from './components/pages/faq-page/faq-page.component';
import { FeedbackPageComponent } from './components/pages/feedback-page/feedback-page.component';
import { GalleryPageComponent } from './components/pages/gallery-page/gallery-page.component';
import { HomePageComponent } from './components/pages/home-page/home-page.component';
import { MyAccountPageComponent } from './components/pages/my-account-page/my-account-page.component';
import { OrderHistoryPageComponent } from './components/pages/order-history-page/order-history-page.component';
import { PrivacyPolicyPageComponent } from './components/pages/privacy-policy-page/privacy-policy-page.component';
import { ProductsDetailsPageComponent } from './components/pages/products-details-page/products-details-page.component';
import { ShippingPageComponent } from './components/pages/shipping-page/shipping-page.component';
import { ShopPageComponent } from './components/pages/shop-page/shop-page.component';
import { SuccessOrderPageComponent } from './components/pages/success-order-page/success-order-page.component';
import { TermsConditionsPageComponent } from './components/pages/terms-conditions-page/terms-conditions-page.component';
import { WishlistPageComponent } from './components/pages/wishlist-page/wishlist-page.component';

const routes: Routes = [
    {path: '', component: HomePageComponent},
    {path: 'about', component: AboutPageComponent},
    {path: 'feedback', component: FeedbackPageComponent},
    {path: 'shop', component: ShopPageComponent},
    {path: 'products/:slug', component: ProductsDetailsPageComponent},
    {path: 'cart', component: CartPageComponent},
    {path: 'compare', component: ComparePageComponent},
    {path: 'checkout', component: CheckoutPageComponent},
    {path: 'wishlist', component: WishlistPageComponent},
    {path: 'gallery', component: GalleryPageComponent},
    {path: 'profile-authentication', component: MyAccountPageComponent},
    {path: 'faq', component: FaqPageComponent},
    {path: 'delivery-returns', component: DeliveryReturnsPageComponent},
    {path: 'shipping', component: ShippingPageComponent},
    {path: 'privacy-policy', component: PrivacyPolicyPageComponent},
    {path: 'terms-conditions', component: TermsConditionsPageComponent},
    {path: 'blog', component: BlogPageComponent},
    {path: 'blog/:slug', component: BlogDetailsPageComponent},
    {path: 'contact', component: ContactPageComponent},
    {path: 'success-order', component: SuccessOrderPageComponent},
    {path: 'order-history', component: OrderHistoryPageComponent},
    // Here add new pages component
    
    { path: '**', component: NotFoundComponent } // This line will remain down from the whole pages component list
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }