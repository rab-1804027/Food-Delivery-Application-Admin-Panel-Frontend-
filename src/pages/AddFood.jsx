import React from 'react'
import { assets } from '../assets/assets'

const AddFood = () => {
  return (
    <div className="mx-2 mt-2">
      <div className="row">
        <div className="card col-md-4">
          <div className="card-body">
            <h2 className="mb-4">Add Food</h2>
            <form>
              <div className="mb-3">
                <label for="image" className="form-label">
                  <img src={assets.upload} height={70} width={70}></img>
                </label>
                <input type="file" className="form-control" id="image" required/>
              </div>
              <div className="mb-3">
                <label for="description" className="form-label">Description</label>
                <textarea className="form-control" id="description" name="description" rows="5" required></textarea>
              </div>
              <div className='mb-3'>
                <label for='category' className='form-label'>Category</label>
                <select name='category' id='category' className='form-control'>
                  <option value='Biryani'>Biryani</option>
                  <option value='Cake'>Cake</option>
                  <option value='Burger'>Burger</option>
                  <option value='Pizza'>Pizza</option>  
                  <option value='Ice Cream'>Ice Cream</option>  
                </select>
              </div>
              <div className="mb-3">
                <label for="price" className="form-label">Price</label>
                <input type="number" id="price" name='price' className="form-control"/>
              </div>
              <button type="submit" className="btn btn-primary">Save</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AddFood