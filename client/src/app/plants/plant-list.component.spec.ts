// import { ComponentFixture, TestBed, async } from "@angular/core/testing";
// import { Plant } from "./plant";
// import { PlantListComponent } from "./plant-list.component";
// import { PlantListService } from "./plant-list.service";
// import { Observable } from "rxjs";
// import { PipeModule } from "../../pipe.module";
//
// describe("Plant list", () => {
//
//     let plantList: PlantListComponent;
//     let fixture: ComponentFixture<PlantListComponent>;
//
//     let plantListServiceStub: {
//         getPlants: () => Observable<Plant[]>
//     };
//
//     beforeEach(() => {
//         // stub PlantService for test purposes
//         plantListServiceStub = {
//             getPlants: () => Observable.of([
//                 {
//                     id: "chris_id",
//                     name: "Chris",
//                     age: 25,
//                     company: "UMM",
//                     email: "chris@this.that"
//                 },
//                 {
//                     id: "pat_id",
//                     name: "Pat",
//                     age: 37,
//                     company: "IBM",
//                     email: "pat@something.com"
//                 },
//                 {
//                     id: "jamie_id",
//                     name: "Jamie",
//                     age: 37,
//                     company: "Frogs, Inc.",
//                     email: "jamie@frogs.com"
//                 }
//                 ])
//         };
//
//         TestBed.configureTestingModule({
//             imports: [PipeModule],
//             declarations: [ PlantListComponent ],
//             // providers:    [ PlantListService ]  // NO! Don't provide the real service!
//             // Provide a test-double instead
//             providers:    [ { provide: PlantListService, useValue: plantListServiceStub } ]
//         })
//     });
//
//     beforeEach(async(() => {
//         TestBed.compileComponents().then(() => {
//             fixture = TestBed.createComponent(PlantListComponent);
//             plantList = fixture.componentInstance;
//             fixture.detectChanges();
//         });
//     }));
//
//     it("contains all the plants", () => {
//         expect(plantList.plants.length).toBe(3);
//     });
//
//     it("contains a plant named 'Chris'", () => {
//         expect(plantList.plants.some((plant: Plant) => plant.name === "Chris" )).toBe(true);
//     });
//
//     it("contain a plant named 'Jamie'", () => {
//         expect(plantList.plants.some((plant: Plant) => plant.name === "Jamie" )).toBe(true);
//     });
//
//     it("doesn't contain a plant named 'Santa'", () => {
//         expect(plantList.plants.some((plant: Plant) => plant.name === "Santa" )).toBe(false);
//     });
//
//     it("has two plants that are 37 years old", () => {
//         expect(plantList.plants.filter((plant: Plant) => plant.age === 37).length).toBe(2);
//     });
//
// });
