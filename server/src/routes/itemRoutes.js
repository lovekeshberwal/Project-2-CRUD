import { Router } from 'express';
import { createItem, getItems, getItem, updateItem, deleteItem } from '../controllers/itemController.js';

const router = Router();

router.get('/', getItems);
router.get('/:id', getItem);
router.post('/', createItem);
router.put('/:id', updateItem);
router.delete('/:id', deleteItem);

export default router;