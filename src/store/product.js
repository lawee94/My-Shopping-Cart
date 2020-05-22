export  const productList = () => {
    let date = new Date(Date.now()).toLocaleString().split(',')[0]
    let prd = [
        { name: 'Topdown', id: '1', price: '6000', description: 'The best description untold.....gonna wao',
            created: date, image: 'product/ladies/11.jpg', tags: ['ladies', 'best-seller'], category: 'cloth'
        },
        { name: 'Topdown', id: '2', price: '5000', description: 'The best description untold.....gonna wao',
            created: date, image: 'product/ladies/1.jpg', tags: ['ladies', 'top-seller'], category: 'cloth'
        },
        { name: 'Topdown', id: '3', price: '6000', description: 'The best description untold.....gonna wao',
            created: date, image: 'product/ladies/2.jpg', tags: ['ladies', 'best-seller'], category: 'cloth'
        },
        { name: 'Topdown', id: '4', price: '6000', description: 'The best description untold.....gonna wao',
            created: date, image: 'product/ladies/3.jpg', tags: ['ladies', 'best-seller'], category: 'cloth'
        },
        { name: 'Topdown', id: '5', price: '6000', description: 'The best description untold.....gonna wao',
            created: date, image: 'product/ladies/4.jpg', tags: ['ladies'], category: 'cloth'
        },
        { name: 'Topdown', id: '6', price: '6000', description: 'The best description untold.....gonna wao',
            created: date, image: 'product/ladies/5.jpg', tags: ['ladies', 'best-seller'], category: 'cloth'
        },
        { name: 'Topdown', id: '7', price: '6000', description: 'The best description untold.....gonna wao',
            created: date, image: 'product/ladies/6.jpg', tags: ['ladies', 'best-seller'], category: 'cloth'
        },
        { name: 'Topdown', id: '8', price: '6500', description: 'The best description untold.....gonna wao',
            created: date, image: 'product/ladies/7.jpg', tags: ['ladies',], category: 'cloth'
        },

        // Men start here
        { name: 'Jacket', id: '9', price: '12500', description: 'The best description untold.....gonna wao',
            created: date, image: 'product/men/men3.jpg', tags: ['men','best-seller', 'top-seller'], category: 'cloth'
        },
        { name: 'Jacket', id: '10', price: '14600', description: 'The best description untold.....gonna wao',
            created: date, image: 'product/men/men4.jpg', tags: ['men', 'top-seller'], category: 'cloth'
        },
        { name: 'Jacket', id: '11', price: '12550', description: 'The best description untold.....gonna wao',
            created: date, image: 'product/men/men5.jpg', tags: ['men','best-seller', ], category: 'cloth'
        },
        { name: 'Jacket', id: '12', price: '24500', description: 'The best description untold.....gonna wao',
            created: date, image: 'product/men/men15.jpg', tags: ['men', 'top-seller'], category: 'cloth'
        },
        { name: 'Jacket', id: '13', price: '12590', description: 'The best description untold.....gonna wao',
            created: date, image: 'product/men/men7.jpg', tags: ['men'], category: 'cloth'
        },
        { name: 'Jacket', id: '14', price: '14500', description: 'The best description untold.....gonna wao',
            created: date, image: 'product/men/men8.jpg', tags: ['men',], category: 'cloth'
        },
        { name: 'Jacket', id: '15', price: '22500', description: 'The best description untold.....gonna wao',
            created: date, image: 'product/men/men9.jpg', tags: ['men' ], category: 'cloth'
        },
        { name: 'Jacket', id: '16', price: '34500', description: 'The best description untold.....gonna wao',
            created: date, image: 'product/men/men10.jpg', tags: ['men', 'top-seller'], category: 'cloth'
        },
        { name: 'Jacket', id: '17', price: '12900', description: 'The best description untold.....gonna wao',
            created: date, image: 'product/men/men11.jpg', tags: ['men' ], category: 'cloth'
        },
        { name: 'Jacket', id: '18', price: '14500', description: 'The best description untold.....gonna wao',
            created: date, image: 'product/men/men12.jpg', tags: ['men', 'top-seller'], category: 'cloth'
        },

        // Kid start here
        { name: 'Kid Top', id: '19', price: '4500', description: 'The best description untold.....gonna wao',
            created: date, image: 'product/kids/1.jpg', tags: ['kid', 'ladies', 'top-seller'], category: 'cloth'
        },
        { name: 'Kid Top', id: '20', price: '4500', description: 'The best description untold.....gonna wao',
            created: date, image: 'product/kids/2.jpg', tags: ['kid', 'ladies'], category: 'cloth'
        },
        { name: 'Kid Top', id: '21', price: '4500', description: 'The best description untold.....gonna wao',
        created: date, image: 'product/kids/3.jpg', tags: ['kid'], category: 'cloth'
        },
        { name: 'Kid Top', id: '22', price: '4500', description: 'The best description untold.....gonna wao',
            created: date, image: 'product/kids/4.jpg', tags: ['kid', 'men'], category: 'cloth'
        }, 
        { name: 'Kid Top', id: '23', price: '4500', description: 'The best description untold.....gonna wao',
            created: date, image: 'product/kids/5.jpg', tags: ['kid', 'ladies', 'top-seller'], category: 'cloth'
        },
        { name: 'Kid Top', id: '24', price: '4500', description: 'The best description untold.....gonna wao',
            created: date, image: 'product/kids/6.jpg', tags: ['kid', 'ladies'], category: 'cloth'
        },
        { name: 'Kid Top', id: '25', price: '4500', description: 'The best description untold.....gonna wao',
        created: date, image: 'product/kids/7.jpg', tags: ['kid'], category: 'cloth'
        },
        { name: 'Kid Top', id: '26', price: '4500', description: 'The best description untold.....gonna wao',
            created: date, image: 'product/kids/8.jpg', tags: ['kid', 'men'], category: 'cloth'
        },  
        { name: 'Kid Top', id: '27', price: '4500', description: 'The best description untold.....gonna wao',
            created: date, image: 'product/kids/9.jpg', tags: ['kid', 'men'], category: 'cloth'
        },

        // Gadget start here 
        { name: 'Infinix hot7', id: '28', price: '45000', description: 'The best description untold.....gonna wao',
            created: date, image: 'product/gadget/1.jfif', tags: ['accesories'], category: 'gadget'
        },
        { name: 'Apple Note 4', id: '29', price: '145000', description: 'The best description untold.....gonna wao',
            created: date, image: 'product/gadget/2.jfif', tags: ['accesories'], category: 'gadget'
        },
        { name: 'Bomplay MP3', id: '30', price: '8000', description: 'The best description untold.....gonna wao',
            created: date, image: 'product/gadget/3.jfif', tags: ['accesories'], category: 'gadget'
        },
        { name: 'iPhone 7plus', id: '31', price: '140000', description: 'The best description untold.....gonna wao',
            created: date, image: 'product/gadget/4.jfif', tags: ['accesories'], category: 'gadget'
        },
        { name: 'Bomp Earphone', id: '32', price: '45000', description: 'The best description untold.....gonna wao',
        created: date, image: 'product/gadget/5.jfif', tags: ['accesories'], category: 'gadget'
        },
        { name: 'Earphone', id: '33', price: '145000', description: 'The best description untold.....gonna wao',
            created: date, image: 'product/gadget/6.jfif', tags: ['accesories'], category: 'gadget'
        },
        { name: 'Smart Watch', id: '34', price: '29000', description: 'The best description untold.....gonna wao',
            created: date, image: 'product/gadget/7.jfif', tags: ['accesories', 'men', 'ladies', 'unisex'], category: 'gadget'
        },
        { name: 'IP Camera', id: '35', price: '54000', description: 'The best description untold.....gonna wao',
            created: date, image: 'product/gadget/8.jfif', tags: ['accesories'], category: 'gadget'
        },
        { name: 'Micro Meter', id: '36', price: '45000', description: 'The best description untold.....gonna wao',
        created: date, image: 'product/gadget/13.jfif', tags: ['accesories'], category: 'gadget'
        },
        { name: 'Camera Stand', id: '37', price: '14500', description: 'The best description untold.....gonna wao',
            created: date, image: 'product/gadget/17.jfif', tags: ['accesories'], category: 'gadget'
        },
        { name: 'Flat screen TV 24Inches', id: '38', price: '72000', description: 'The best description untold.....gonna wao',
            created: date, image: 'product/gadget/19.jfif', tags: ['accesories', 'men', 'ladies', 'unisex'], category: 'gadget'
        },
        { name: 'Flat Screen Tv 32Inches', id: '39', price: '84000', description: 'The best description untold.....gonna wao',
            created: date, image: 'product/gadget/20.jfif', tags: ['accesories'], category: 'gadget'
        },
        { name: 'Snove Smart Watch', id: '39', price: '30000', description: 'The best description untold.....gonna wao',
            created: date, image: 'product/gadget/16.jfif', tags: ['accesories', 'men', 'ladies', 'unisex'], category: 'gadget'
        },
        { name: 'Wireless Earpiece', id: '41', price: '3000', description: 'The best description untold.....gonna wao',
            created: date, image: 'product/gadget/12.jfif', tags: ['accesories', 'men', 'ladies', 'unisex'], category: 'gadget'
        },

        // Unisex start here
        { name: 'Jacket', id: '42', price: '5000', description: 'The best description untold.....gonna wao',
            created: date, image: 'product/men/unisex1.jpg', tags: ['best-seller', 'men', 'ladies', 'unisex'], category: 'cloth'
        },
        { name: 'T-Shirt', id: '43', price: '5000', description: 'The best description untold.....gonna wao',
            created: date, image: 'product/men/unisex2.jpg', tags: ['top-seller', 'men', 'ladies', 'unisex'], category: 'cloth'
        },
        { name: 'Jacket', id: '44', price: '5000', description: 'The best description untold.....gonna wao',
            created: date, image: 'product/men/unisex3.jpg', tags: ['best-seller', 'men', 'ladies', 'unisex'], category: 'cloth'
        }
    ]
    return prd
}