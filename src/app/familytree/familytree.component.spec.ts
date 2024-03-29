import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FamilytreeComponent } from './familytree.component';
import diagram from 'devextreme/ui/diagram';

describe('FamilytreeComponent', () => {
  let component: FamilytreeComponent;
  let fixture: ComponentFixture<FamilytreeComponent>;
  const defaults = {
    height:115,
    width:330
  };
  const template = ({ photo, name, post, phone, mail }) => (`
    <div class="dhx-diagram-demo_personal-card">
      <div class="dhx-diagram-demo_personal-card__container dhx-diagram-demo_personal-card__img-container">
             <img src="${photo}" alt="${name}-${post}"></img>
      </div>
      <div class="dhx-diagram-demo_personal-card__container">
            <h3>${name}</h3>
            <p>${post}</p>
            <span class="dhx-diagram-demo_personal-card__info">
                <i class="mdi mdi-cellphone-android"></i>
                <p>${phone}</p>
            </span>
            <span class="dhx-diagram-demo_personal-card__info">
                <i class="mdi mdi-email-outline"></i>
                <a href="mailto:${mail}" target="_blank">${mail}</a>
            </span>
      </div>
    </div>
 ` );
 diagram.addShape("template", {
  template,
  defaults
});

diagram.data.parse(data);

const data = [
    {
        id: "main",
        name: "Kristin Mccoy",
        post: "Medical director",
        phone: "(405) 555-0128",
        mail: "kmccoy@gmail.com",
        photo: "https://docs.dhtmlx.com/diagram/samples/common/big_img/big-avatar-1.jpg",
    },
    {
        id: "1",
        name: "Theo Fisher",
        post: "Head of department",
        phone: "(405) 632-1372",
        mail: "tfisher@gmail.com",
        photo: "https://docs.dhtmlx.com/diagram/samples/common/big_img/big-avatar-2.jpg",
        parent: "main"
    },
    {
        id: "1.1",
        name: "Francesca Saunders",
        post: "Attending physician",
        phone: "(402) 371-6736",
        mail: "fsaunders@gmail.com",
        photo: "https://docs.dhtmlx.com/diagram/samples/common/big_img/big-avatar-3.jpg",
        parent: "1",
        open: false
    },
    {
        id: "2",
        name: "Alisha Hall",
        post: "Head of department",
        phone: "(405) 372-9756",
        mail: "ahall@gmail.com",
        photo: "https://docs.dhtmlx.com/diagram/samples/common/big_img/big-avatar-4.jpg",
        parent: "main",
        open: false
    },
    {
        id: "2.1",
        name: "Milena Hunter",
        post: "Attending physician",
        phone: "(124) 622-1256",
        mail: "mhunter@gmail.com",
        photo: "https://docs.dhtmlx.com/diagram/samples/common/big_img/big-avatar-25.jpg",
        parent: "2",
        dir: "vertical",
    },
    {
        id: "2.2",
        name: "Maximus Dixon",
        post: "Medical director",
        phone: "(264) 684-4373",
        mail: "mdixon@gmail.com",
        photo: "https://docs.dhtmlx.com/diagram/samples/common/big_img/big-avatar-29.jpg",
        parent: "2",
        dir: "vertical",
    },
    {
        id: "3",
        name: "Edward Sharp",
        post: "Head of department",
        phone: "(451) 251-2578",
        mail: "esharp@gmail.com",
        photo: "https://docs.dhtmlx.com/diagram/samples/common/big_img/big-avatar-6.jpg",
        parent: "main",
        dir: "vertical",
    },
    {
        id: "3.1",
        name: "Cruz Burke",
        post: "Attending physician",
        phone: "(587) 234-8975",
        mail: "cburke@gmail.com",
        photo: "https://docs.dhtmlx.com/diagram/samples/common/big_img/big-avatar-7.jpg",
        parent: "3",
    },
    {
        id: "3.2",
        name: "Eloise Saunders",
        post: "Attending physician",
        phone: "(875) 231-5332",
        mail: "esaunders@gmail.com",
        photo: "https://docs.dhtmlx.com/diagram/samples/common/big_img/big-avatar-8.jpg",
        parent: "3",
    },
    {
        id: "3.3",
        name: "Sophia Matthews",
        post: "Attending physician",
        phone: "(361) 423-7234",
        mail: "smatthews@gmail.com",
        photo: "https://docs.dhtmlx.com/diagram/samples/common/big_img/big-avatar-9.jpg",
        parent: "3",
    },
    {
        id: "3.4",
        name: "Kara Foster",
        post: "Attending physician",
        phone: "(565) 525-0672",
        mail: "kfoster@gmail.com",
        photo: "https://docs.dhtmlx.com/diagram/samples/common/big_img/big-avatar-10.jpg",
        parent: "3",
    },
];

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FamilytreeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FamilytreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
