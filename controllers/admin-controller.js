const { Gym } = require('../models')

const adminController = {
  getAdminPage: async (req, res, next) => {
    try {
      const gyms = await Gym.findAll({
        raw: true,
      })
      res.render('admin/gym', { gyms })
    } catch (err) {
      next(err)
    }
  },
  createGym: (req, res, next) => {
    return res.render('admin/create-gym')
  },
  postGym: async (req, res, next) => {
    try {
      const { name, tel, address, openingHours, description } = req.body
      if (!name) throw new Error('Gym name is required')
      await Gym.create({
        name,
        tel,
        address,
        openingHours,
        description,
      })
      req.flash('success_messages', 'Gym was successfully created')
      res.redirect('/admin/gym')
    } catch (err) {
      next(err)
    }
  },
  getGym: async (req, res, next) => {
    try {
      const id = req.params.id
      const gym = await Gym.findByPk(id, {
        raw: true,
      })
      if (!gym) throw new Error("Gym didn't exist!")
      res.render('admin/show', { gym })
    } catch (err) {}
  },
  editGym: async (req, res, next) => {
    try {
      const id = req.params.id
      const gym = await Gym.findByPk(id, {
        raw: true,
      })
      if (!gym) throw new Error("Gym didn't exist!")
      res.render('admin/edit-gym', { gym })
    } catch (err) {
      next(err)
    }
  },
  putGym: async (req, res, next) => {
    try {
      const { name, tel, address, openingHours, description } = req.body
      if (!name) throw new Error('Gym name is required')
      const gym = await Gym.findByPk(req.params.id)
      if (!gym) throw new Error("Gym didn't exist")
      await gym.update({
        name,
        tel,
        address,
        openingHours,
        description,
      })
      req.flash('success_messages', 'Gym was successfully created')
      res.redirect('/admin/gym')
    } catch (err) {
      next(err)
    }
  },
  deleteGym: async (req, res, next) => {
    try {
      const id = req.params.id
      const gym = await Gym.findByPk(id)
      if (!gym) throw new Error("Gym didn't exist")
      await gym.destroy()
      res.redirect('/admin/gym')
    } catch (err) {
      next(err)
    }
  },
}
module.exports = adminController
