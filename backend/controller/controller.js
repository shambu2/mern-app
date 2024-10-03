import Product from "../model/model.js";
export const getControl = async (req, res) => {
    try {
        const products = await Product.find();
        res.status(200).json({ success: true, data: products });
    } catch (error) {
        res.status(500).json({ error: 'failed to fetch products' });
    }
}
export const postControl = async (req, res) => {
    const product = req.body;
    if (!product.name || !product.price || !product.image) {
        return res.status(400).json({ success: false, message: "pleave provide all fields" });

    }
    const newProduct = new Product(product);
    try {
        await newProduct.save();
        res.status(201).json({ success: true, data: newProduct })
    } catch (error) {
        console.error(error);
        res.status(400).json({ error: 'failed to create user' });
    }
}

export const putControl = async(req,res)=>{
    const productId = req.params.id;
    const product = req.body;
    try {
        await Product.findByIdAndUpdate(
            productId,
            product
        )
        res.status(201).json({success:true,message:"product updated"});

    } catch (error) {
        res.status(400).json({error:"failed to update"})
    }
}

export const deleteControl = async (req, res) => {
    const ID = req.params.id

    try {
        await Product.findByIdAndDelete(ID)
        res.status(200).json({ success: true, message: "deleted successfully" })
    } catch (error) {
        res.status(500).json({ error: "failed to delete " })
    }
}