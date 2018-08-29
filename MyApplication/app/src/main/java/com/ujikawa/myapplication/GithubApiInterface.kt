package com.ujikawa.myapplication

import retrofit2.Call
import retrofit2.http.GET
import retrofit2.http.Path

interface GithubApiInterface {
    @GET("users/{username}")
    fun apiDemo(@Path("username") user: String): Call<User>
}