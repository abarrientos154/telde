'use strict'

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

const Env = use('Env')
const View = use('View')
const StripeKey = Env.get('STRIPE_KEY')
const StripeKeyPrivate = Env.get('STRIPE_KEY_PRIVATE')
console.log(StripeKey, 'stripekey')
const Stripe = require('stripe')
const stripe = Stripe(StripeKeyPrivate)

View.global('stripekey', function () {
  return StripeKey
})


/**
 * Resourceful controller for interacting with payments
 */
class PaymentController {

  async create ({ request, response, view }) {
    let body = request.get()
    console.log(body, 'soy un body testStripe')
    View.global('ruta', function () {
      return `/api/procesador_pagos/${body.user_id}/${body.montoTotal}/${body.ref}/${body.tienda_id}/${body.type}/${body.op}`
    })
    return view.render('paytoshop')
  }

  async procesarPago ({ request, params, view, response }) {
    let body = params
    console.log(body, 'soy un body')
    let totalPagar = body.montoTotal * 100
    console.log(totalPagar, 'total')
    var url1, url2
    url1 = body.type === 'mobile' ? 'https://app.teldepayshop.com/pay_stripe' : 'https://teldeweb.eichechile.com/#/login'
    url2 = body.type === 'mobile' ? 'https://app.teldepayshop.com/pay_stripe_cancel' : 'https://teldeweb.eichechile.com/#/login'
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: [
        {
          price_data: {
            currency: 'eur',
            product_data: {
              name: 'Productos',
            },
            unit_amount: totalPagar,
          },
          quantity: 1,
        },
      ],
      mode: 'payment',
      success_url: `${url1}?user_id=${params.user_id}&tienda_id=${params.tienda_id}&ref=${params.ref}&type=${body.type}&op=${body.op}`,
      cancel_url: `${url2}?user_id=${params.user_id}&ref=${params.ref}&tienda_id=${params.tienda_id}&cancel=${0}&type=${body.type}&op=${body.op}`,
    })
    response.send({ id: session.id })
  }

  /**
   * Create/save a new payment.
   * POST payments
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store ({ request, response }) {
  }

  /**
   * Display a single payment.
   * GET payments/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show ({ params, request, response, view }) {
  }

  /**
   * Render a form to update an existing payment.
   * GET payments/:id/edit
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async edit ({ params, request, response, view }) {
  }

  /**
   * Update payment details.
   * PUT or PATCH payments/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update ({ params, request, response }) {
  }

  /**
   * Delete a payment with id.
   * DELETE payments/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy ({ params, request, response }) {
  }
}

module.exports = PaymentController
