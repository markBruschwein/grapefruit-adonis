'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Workout extends Model {

    user () {
        return this.belongsToMany('App/Models/User')
      }

    exercises () {
        return this.hasMany('App/Models/Exercise')
    }

}

module.exports = Workout
