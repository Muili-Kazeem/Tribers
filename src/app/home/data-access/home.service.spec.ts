import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { HomeService } from './home.service';
import { ICoupon, SAMPLECOUPONS } from '../models/coupon';
import { HttpClient } from '@angular/common/http';

describe('HomeService', () => {
  let httpClient: HttpClient;
  let service: HomeService;
  let testingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [HttpClient],
    });

    httpClient = TestBed.inject(HttpClient);
    service = TestBed.inject(HomeService);
    testingController = TestBed.inject(HttpTestingController);
  });

  it('should create HomeService', () => {
    expect(service).toBeTruthy();
  });

  // it("should get all coupons", () => {
  //   let allCoupons: ICoupon[] | undefined;
  //   service.getAllCoupons().subscribe((coupons: ICoupon[]) => {
  //     allCoupons = coupons;
  //   })

  //   const mockReq = testingController.expectOne('json/couponDataTest.json');
  //   mockReq.flush(Object.values(SAMPLECOUPONS));

  //   expect(allCoupons).toBeTruthy();
  //   expect(allCoupons?.length).toBe(3);

  //   const secondCoupon = allCoupons?.find((coupon: ICoupon) => coupon.id === '9d860470-8cf1-42b0-a738-f38ad38871c1');
  //   expect(secondCoupon?.company_name).toBe('Fadel LLC');
  // })

  afterEach(() => {
    testingController.verify();
  })

});
