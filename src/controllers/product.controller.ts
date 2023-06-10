import { Request, Response } from 'express';
import ProductService from '../service/product.service';
import { Product } from '../typings/product.typings';

export default {
    async sortList(req: Request, res: Response): Promise<Response> {
        try {
            const originalList = <Product> req.body;
            const sortedList = await ProductService.createClusteredList(originalList);

            if (!sortedList) return res.status(404).json({ error: `Erro ao classificar a lista` });

            return res.status(200).json(sortedList);
        } catch (err) {
            console.error('Erro ao classificar produtos:', err.message);
            return res.status(err.code || 500).json({ error: err.message });
        }
    }
}