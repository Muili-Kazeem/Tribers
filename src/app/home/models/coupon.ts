export interface ICoupon {
  id: string;
  user_id: number;
  offer_type: string;
  title: string;
  company_logo: string;
  company_name: string;
  coupon_discount: number;
  coupon_code: string;
  currency: 'NGN';
  payment_type: string;
  amount: string;
  status: number;
  job_type: string;
  job_style: string;
  banner_image: string;
  offer_url: string;
  redeemable: number;
  experience_level: string;
  description: string;
  created_at: string;
  updated_at: string;
  user: {
    id: number;
    name: string;
  };
  category: {
    id: number;
    category_name: string;
    category_type: string;
    category_slug: string;
    category_status: number;
    category_image: string;
    category_icon: string;
    category_description: string;
    deleted_at: string;
    created_at: string;
    updated_at: string;
  };
  company_location: string;
  brand: {
    id: number;
    name: string;
    logo: string;
    color: string;
    coupon_off: string;
    deleted_at: string;
  };
  days_ago: string;
  applications: [];
  bookmarked: boolean;
}

export interface ICouponResponse {
  result: boolean;
  status: string;
  message: string;
  data: ICoupon[]
}


export const SAMPLECOUPONS = [
  {
    "id": "9d860470-8420-449e-998f-7dc526182e6b",
    "user_id": 1,
    "offer_type": "coupon",
    "title": "Enim nulla atque quia vero sunt.",
    "company_logo": null,
    "company_name": "Denesik Inc",
    "coupon_discount": 10,
    "coupon_code": "TWB195721",
    "currency": "NGN",
    "payment_type": "year",
    "amount": "21614.00",
    "status": 1,
    "job_type": null,
    "job_style": null,
    "banner_image": null,
    "offer_url": "",
    "redeemable": 0,
    "experience_level": null,
    "description": "Ullam quaerat omnis voluptatem et voluptatem sit ut. Omnis sapiente quaerat exercitationem quia natus omnis. Sunt iste asperiores consectetur est asperiores et. Cumque vitae libero rerum beatae sit aut ad. Consectetur commodi in laudantium natus et. Ipsum nam natus eum.",
    "created_at": "2024-11-19T04:07:36.000000Z",
    "updated_at": "2024-11-19T04:07:36.000000Z",
    "user": {
      "id": 1,
      "name": "admin admin"
    },
    "category": {
      "id": 10,
      "category_name": "Tech",
      "category_type": "job",
      "category_slug": "tech",
      "category_status": 1,
      "category_image": null,
      "category_icon": null,
      "category_description": null,
      "deleted_at": null,
      "created_at": null,
      "updated_at": null
    },
    "company_location": "Labé Region",
    "brand": {
      "id": 3,
      "name": "Amazon",
      "logo": null,
      "color": "#845600",
      "coupon_off": "up  to  20%  off",
      "deleted_at": null
    },
    "days_ago": "2 weeks ago",
    "applications": [],
    "bookmarked": false
  },
  {
    "id": "9d860470-8cf1-42b0-a738-f38ad38871c1",
    "user_id": 1,
    "offer_type": "coupon",
    "title": "Dolorem aut ea vel et corrupti.",
    "company_logo": null,
    "company_name": "Fadel LLC",
    "coupon_discount": 46,
    "coupon_code": "TWB728947",
    "currency": "NGN",
    "payment_type": "year",
    "amount": "91023.00",
    "status": 1,
    "job_type": null,
    "job_style": null,
    "banner_image": null,
    "offer_url": "",
    "redeemable": 0,
    "experience_level": null,
    "description": "Et rerum voluptatem minus qui doloremque. Natus non aspernatur dolores doloribus illum dolor. Architecto odit suscipit ipsa non sunt. Aut error sit aut quis quas. Qui et enim officia deleniti fugit consectetur quis. Laborum voluptatem itaque quia rem nulla iure. Hic ex inventore harum omnis. Quam id ea sed ut suscipit provident. Animi architecto ex qui delectus.",
    "created_at": "2024-11-19T04:07:36.000000Z",
    "updated_at": "2024-11-19T04:07:36.000000Z",
    "user": {
      "id": 1,
      "name": "admin admin"
    },
    "category": {
      "id": 12,
      "category_name": "Engineering",
      "category_type": "job",
      "category_slug": "Engineering",
      "category_status": 1,
      "category_image": null,
      "category_icon": null,
      "category_description": null,
      "deleted_at": null,
      "created_at": null,
      "updated_at": null
    },
    "company_location": "Fria Prefecture",
    "brand": {
      "id": 2,
      "name": "Asos",
      "logo": null,
      "color": "#4E0085",
      "coupon_off": "up  to  60%  off",
      "deleted_at": null
    },
    "days_ago": "2 weeks ago",
    "applications": [],
    "bookmarked": false
  },
  {
    "id": "9d860470-8e6d-4197-83bd-d87738312cb8",
    "user_id": 1,
    "offer_type": "coupon",
    "title": "Ullam in dolorem sunt qui soluta.",
    "company_logo": null,
    "company_name": "McCullough, Friesen and Schinner",
    "coupon_discount": 12,
    "coupon_code": "TWB295518",
    "currency": "NGN",
    "payment_type": "year",
    "amount": "67149.00",
    "status": 1,
    "job_type": null,
    "job_style": null,
    "banner_image": null,
    "offer_url": "#",
    "redeemable": 1,
    "experience_level": null,
    "description": "Nesciunt dolorum similique voluptas laboriosam. Tempora sequi quaerat nostrum unde impedit. Adipisci dolorem qui error qui doloribus. Est assumenda aut et amet doloribus. Odit est voluptas doloribus. Voluptas iure mollitia nostrum hic non dolor ea. Enim non et labore explicabo in qui inventore.",
    "created_at": "2024-11-19T04:07:36.000000Z",
    "updated_at": "2024-11-19T04:07:36.000000Z",
    "user": {
      "id": 1,
      "name": "admin admin"
    },
    "category": {
      "id": 16,
      "category_name": "Security",
      "category_type": "job",
      "category_slug": "security",
      "category_status": 1,
      "category_image": null,
      "category_icon": null,
      "category_description": null,
      "deleted_at": null,
      "created_at": null,
      "updated_at": null
    },
    "company_location": "Central River Division",
    "brand": {
      "id": 2,
      "name": "Asos",
      "logo": null,
      "color": "#4E0085",
      "coupon_off": "up  to  60%  off",
      "deleted_at": null
    },
    "days_ago": "2 weeks ago",
    "applications": [],
    "bookmarked": false
  },
]
