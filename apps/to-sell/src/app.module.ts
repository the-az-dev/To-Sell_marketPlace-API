import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './user/entities/user.entity';
import { UsersRoleModule } from './users-role/users-role.module';
import * as dotenv from 'dotenv';
import { UsersRole } from './users-role/entities/users-role.entity';
import { AuthModule } from './auth/auth.module';
import { APP_GUARD } from '@nestjs/core';
import { RolesGuard } from './users-role/guards/userrs-role.guard';
import { MulterModule } from '@nestjs/platform-express';
import { FileManagerModule } from './file-manager/file-manager.module';
import { SmtpModule } from './smtp/smtp.module';
import { ProductsModule } from './products/products.module';
import { CartsProductListModule } from './carts-product-list/carts-product-list.module';
import { OrdersModule } from './orders/orders.module';
import { OrdersHitoryModule } from './orders-hitory/orders-hitory.module';
import { OrdersStatusModule } from './orders-status/orders-status.module';
import { ProductsPhotoModule } from './products-photo/products-photo.module';
import { OrdersProductListModule } from './orders-product-list/orders-product-list.module';
import { ShopsReviewModule } from './shops-review/shops-review.module';
import { ProductsCategoryModule } from './products-category/products-category.module';
import { ShopsCategoryModule } from './shops-category/shops-category.module';
import { ProductsReviewModule } from './products-review/products-review.module';
import { CartsModule } from './carts/carts.module';
import { AttributesModule } from './attributes/attributes.module';
import { CategoriesAttributesModule } from './categories-attributes/categories-attributes.module';
import { AttributesValueModule } from './attributes-value/attributes-value.module';
import { Attribute } from "./attributes/entities/attribute.entity";
import { AttributesValue } from "./attributes-value/entities/attributes-value.entity";
import { Cart } from "./carts/entities/cart.entity";
import { CartsProductList } from "./carts-product-list/entities/carts-product-list.entity";
import { CategoriesAttribute } from "./categories-attributes/entities/categories-attribute.entity";
import { CategoriesModule } from './categories/categories.module';
import { Category } from "./categories/entities/category.entity";
import { Order } from "./orders/entities/order.entity";
import { OrdersHitory } from "./orders-hitory/entities/orders-hitory.entity";
import { OrdersProductList } from "./orders-product-list/entities/orders-product-list.entity";
import { OrdersStatus } from "./orders-status/entities/orders-status.entity";
import { Product } from "./products/entities/product.entity";
import { ProductsCategory } from "./products-category/entities/products-category.entity";
import { ProductsPhoto } from "./products-photo/entities/products-photo.entity";
import { ProductsReview } from "./products-review/entities/products-review.entity";
import { Shop } from "./shops/entities/shop.entity";
import { ShopsCategory } from "./shops-category/entities/shops-category.entity";
import { ShopsReview } from "./shops-review/entities/shops-review.entity";
import { OrdersHistoryProductListModule } from './orders-history-product-list/orders-history-product-list.module';
dotenv.config({ path: __dirname + '/../../../.env' });

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: '127.0.0.1',
      port: 3306,
      username: process.env.MYSQL_USERNAME,
      password: process.env.MYSQL_PASSWORD,
      database: process.env.MYSQL_DATABASE,
      entities: [
        User,
        UsersRole,
        Attribute,
        AttributesValue,
        Cart,
        CartsProductList,
        CategoriesAttribute,
        Category,
        Order,
        OrdersHitory,
        OrdersProductList,
        OrdersStatus,
        Product,
        ProductsCategory,
        ProductsPhoto,
        ProductsReview,
        Shop,
        ShopsCategory,
        ShopsReview,
      ],
      synchronize: true,
    }),
    UserModule,
    UsersRoleModule,
    AuthModule,
    MulterModule.register({
      dest: '../upload',
    }),
    FileManagerModule,
    SmtpModule,
    ProductsModule,
    CartsProductListModule,
    OrdersModule,
    OrdersHitoryModule,
    OrdersStatusModule,
    ProductsPhotoModule,
    OrdersProductListModule,
    ShopsReviewModule,
    ProductsCategoryModule,
    ShopsCategoryModule,
    ProductsReviewModule,
    CartsModule,
    AttributesModule,
    CategoriesAttributesModule,
    AttributesValueModule,
    CategoriesModule,
    OrdersHistoryProductListModule,
  ],
  controllers: [AppController],
  providers: [
    AppService,
    {
      provide: APP_GUARD,
      useClass: RolesGuard,
    },
  ],
})
export class AppModule {}
