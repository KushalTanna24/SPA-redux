(this["webpackJsonpreact-complete-guide"]=this["webpackJsonpreact-complete-guide"]||[]).push([[0],{14:function(t,e,i){t.exports={card:"Card_card__1m44e"}},15:function(t,e,i){t.exports={cart:"Cart_cart__3GqLz"}},16:function(t,e,i){t.exports={header:"MainHeader_header__k5Wsz"}},17:function(t,e,i){t.exports={products:"Products_products__1PCvW"}},3:function(t,e,i){t.exports={item:"CartItem_item__1zMOi",details:"CartItem_details__2_Z3n",quantity:"CartItem_quantity__DfEXm",price:"CartItem_price__2Nl0j",itemprice:"CartItem_itemprice__j9ZSt",actions:"CartItem_actions__UwVPJ"}},30:function(t,e,i){},32:function(t,e,i){"use strict";i.r(e);var c=i(1),r=i(11),n=i.n(r),a=i(2),s=(i(30),i(14)),d=i.n(s),o=i(0),l=function(t){return Object(o.jsx)("section",{className:"".concat(d.a.card," ").concat(t.className?t.className:""),children:t.children})},u=i(15),j=i.n(u),b=i(3),m=i.n(b),p=i(4),h=Object(p.b)({name:"cart",initialState:{items:[],totalQuantity:0},reducers:{addItemToCart:function(t,e){var i=e.payload,c=t.items.find((function(t){return t.id===i.id}));t.totalQuantity++,c?(c.quantity++,c.totalPrice=c.totalPrice+i.price):t.items.push({id:i.id,price:i.price,quantity:1,totalPrice:i.price,name:i.title})},removeItemFromCart:function(t,e){var i=e.payload,c=t.items.find((function(t){return t.id===i}));t.totalQuantity--,1===c.quantity?t.items=t.items.filter((function(t){return t.id!==i})):(c.quantity--,c.totalPrice=c.totalPrice-c.price)}}}),x=h.actions,O=h,_=function(t){var e=Object(a.b)(),i=t.item,c=i.title,r=i.quantity,n=i.total,s=i.price,d=i.id;return Object(o.jsxs)("li",{className:m.a.item,children:[Object(o.jsxs)("header",{children:[Object(o.jsx)("h3",{children:c}),Object(o.jsxs)("div",{className:m.a.price,children:["$",n.toFixed(2),Object(o.jsxs)("span",{className:m.a.itemprice,children:["($",s.toFixed(2),"/item)"]})]})]}),Object(o.jsxs)("div",{className:m.a.details,children:[Object(o.jsxs)("div",{className:m.a.quantity,children:["x ",Object(o.jsx)("span",{children:r})]}),Object(o.jsxs)("div",{className:m.a.actions,children:[Object(o.jsx)("button",{onClick:function(){e(x.removeItemFromCart(d))},children:"-"}),Object(o.jsx)("button",{onClick:function(){e(x.addItemToCart({id:d,title:c,price:s}))},children:"+"})]})]})]})},f=function(t){var e=Object(a.c)((function(t){return t.cart.items}));return Object(o.jsxs)(l,{className:j.a.cart,children:[Object(o.jsx)("h2",{children:"Your Shopping Cart"}),Object(o.jsx)("ul",{children:e.map((function(t){return Object(o.jsx)(_,{item:{id:t.id,title:t.name,quantity:t.quantity,total:t.totalPrice,price:t.price}},t.id)}))})]})},C=Object(p.b)({name:"ui",initialState:{isVisible:!1},reducers:{toggle:function(t){t.isVisible=!t.isVisible}}}),v=C.actions,y=C,N=i(9),I=i.n(N),P=function(t){var e=Object(a.b)(),i=Object(a.c)((function(t){return t.cart.totalQuantity}));return Object(o.jsxs)("button",{className:I.a.button,onClick:function(){e(v.toggle())},children:[Object(o.jsx)("span",{children:"My Cart"}),Object(o.jsx)("span",{className:I.a.badge,children:i})]})},g=i(16),q=i.n(g),k=function(t){return Object(o.jsxs)("header",{className:q.a.header,children:[Object(o.jsx)("h1",{children:"ReduxCart"}),Object(o.jsx)("nav",{children:Object(o.jsx)("ul",{children:Object(o.jsx)("li",{children:Object(o.jsx)(P,{})})})})]})},T=function(t){return Object(o.jsxs)(c.Fragment,{children:[Object(o.jsx)(k,{}),Object(o.jsx)("main",{children:t.children})]})},F=i(5),S=i.n(F),V=function(t){var e=Object(a.b)(),i=t.title,c=t.price,r=t.description,n=t.id;return Object(o.jsx)("li",{className:S.a.item,children:Object(o.jsxs)(l,{children:[Object(o.jsxs)("header",{children:[Object(o.jsx)("h3",{children:i}),Object(o.jsxs)("div",{className:S.a.price,children:["$",c.toFixed(2)]})]}),Object(o.jsx)("p",{children:r}),Object(o.jsx)("div",{className:S.a.actions,children:Object(o.jsx)("button",{onClick:function(){e(x.addItemToCart({id:n,title:i,price:c}))},children:"Add to Cart"})})]})})},B=i(17),J=i.n(B),M=[{id:"p1",price:6,title:"Test Product 1",description:"This is a test product 1"},{id:"p2",price:5,title:"Test Product 2",description:"This is a test product 2"}],Q=function(t){return Object(o.jsxs)("section",{className:J.a.products,children:[Object(o.jsx)("h2",{children:"Buy your favorite products"}),Object(o.jsx)("ul",{children:M.map((function(t){return Object(o.jsx)(V,{id:t.id,title:t.title,price:t.price,description:t.description},t.id)}))})]})};var w=function(){var t=Object(a.c)((function(t){return t.ui.isVisible}));return Object(o.jsxs)(T,{children:[t&&Object(o.jsx)(f,{}),Object(o.jsx)(Q,{})]})},z=Object(p.a)({reducer:{ui:y.reducer,cart:O.reducer}});n.a.createRoot(document.getElementById("root")).render(Object(o.jsx)(a.a,{store:z,children:Object(o.jsx)(w,{})}))},5:function(t,e,i){t.exports={item:"ProductItem_item__WYS0J",price:"ProductItem_price__1GiPR",actions:"ProductItem_actions__14Yr-"}},9:function(t,e,i){t.exports={button:"CartButton_button__3nU_b",badge:"CartButton_badge__3njqM"}}},[[32,1,2]]]);
//# sourceMappingURL=main.b8885781.chunk.js.map