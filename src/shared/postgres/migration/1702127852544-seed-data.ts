import { MigrationInterface, QueryRunner } from "typeorm";

export class SeedData1702127852544 implements MigrationInterface {
    name = 'SeedData1702127852544'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
        INSERT INTO public.product (is_valid, created_at, updated_at, id, "name", price, description, image, "largeImage", discount, "discountAmount") VALUES(true, '2023-12-20 05:31:41.823', '2023-12-20 05:31:41.823', '6f26d833-5b11-460f-bab5-c1d8eda6566b', 'Basketball', 29.99, 'Official size and weight basketball for indoor and outdoor use.', 'basketball.jpg', 'basketball_large.jpg', 10, 3);
        INSERT INTO public.product (is_valid, created_at, updated_at, id, "name", price, description, image, "largeImage", discount, "discountAmount") VALUES(true, '2023-12-20 05:32:01.883', '2023-12-20 05:32:01.883', '6aaf819d-380f-4722-9139-adabce711037', 'Yoga Mat', 19.99, 'Non-slip and eco-friendly yoga mat for a perfect workout experience.', 'yoga_mat.jpg', 'yoga_mat_large.jpg', 15, 3);
        INSERT INTO public.product (is_valid, created_at, updated_at, id, "name", price, description, image, "largeImage", discount, "discountAmount") VALUES(true, '2023-12-20 05:32:13.147', '2023-12-20 05:32:13.147', '5454593b-74db-43fd-9519-be4f0b761f71', 'Tennis Racket', 59.99, 'High-quality tennis racket for players of all skill levels.', 'tennis_racket.jpg', 'tennis_racket_large.jpg', 20, 12);
        INSERT INTO public.product (is_valid, created_at, updated_at, id, "name", price, description, image, "largeImage", discount, "discountAmount") VALUES(true, '2023-12-20 05:32:26.931', '2023-12-20 05:32:26.931', '7c88e063-f2fd-462b-8a64-91f89bbf5b22', 'Soccer Ball', 24.99, 'Durable soccer ball suitable for both training and matches.', 'soccer_ball.jpg', 'soccer_ball_large.jpg', 10, 2);
        INSERT INTO public.product (is_valid, created_at, updated_at, id, "name", price, description, image, "largeImage", discount, "discountAmount") VALUES(true, '2023-12-20 05:32:43.332', '2023-12-20 05:32:43.332', '7336b6ea-ca19-4052-8d10-fc0a33e25e6c', 'Fitness Tracker', 49.99, 'Smart fitness tracker with heart rate monitoring and activity tracking features.', 'fitness_tracker.jpg', 'fitness_tracker_large.jpg', 25, 12.5);
        INSERT INTO public.product (is_valid, created_at, updated_at, id, "name", price, description, image, "largeImage", discount, "discountAmount") VALUES(true, '2023-12-19 22:40:03.512', '2023-12-19 22:40:03.512', '7efc53b0-c548-4c17-bd06-df58e411d021', 'Swimming Goggles', 14.99, 'Anti-fog swimming goggles with UV protection for clear vision underwater.', 'swimming_goggles.jpg', 'swimming_goggles_large.jpg', 0, 0);
        INSERT INTO public.product (is_valid, created_at, updated_at, id, "name", price, description, image, "largeImage", discount, "discountAmount") VALUES(true, '2023-12-19 22:40:31.328', '2023-12-19 22:40:31.328', '337af833-47c8-4642-b5a2-7726600b92ff', 'Gym Backpack', 34.99, 'Spacious and stylish gym backpack with multiple compartments.', 'gym_backpack.jpg', 'gym_backpack_large.jpg', 0, 0);
        INSERT INTO public.product (is_valid, created_at, updated_at, id, "name", price, description, image, "largeImage", discount, "discountAmount") VALUES(true, '2023-12-19 22:40:44.582', '2023-12-19 22:40:44.582', '829ebf23-c8a9-4e8c-b820-241e939e990f', 'Cycling Helmet', 39.99, 'Safety-certified cycling helmet with adjustable straps and ventilation.', 'cycling_helmet.jpg', 'cycling_helmet_large.jpg', 0, 0);
        INSERT INTO public.product (is_valid, created_at, updated_at, id, "name", price, description, image, "largeImage", discount, "discountAmount") VALUES(true, '2023-12-19 22:40:55.283', '2023-12-19 22:40:55.283', '28b75619-cf0d-4b1d-8a0a-957914fc3709', 'Weightlifting Gloves', 24.99, 'Durable weightlifting gloves with wrist support for enhanced grip and safety.', 'weightlifting_gloves.jpg', 'weightlifting_gloves_large.jpg', 0, 0);
        INSERT INTO public.product (is_valid, created_at, updated_at, id, "name", price, description, image, "largeImage", discount, "discountAmount") VALUES(true, '2023-12-19 22:41:02.916', '2023-12-19 22:41:02.916', 'd2f80d85-cce4-4498-a54e-9d7ad055931b', 'Running Shoes', 79.99, 'Comfortable running shoes with advanced cushioning technology.', 'running_shoes.jpg', 'running_shoes_large.jpg', 0, 0);
        `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
