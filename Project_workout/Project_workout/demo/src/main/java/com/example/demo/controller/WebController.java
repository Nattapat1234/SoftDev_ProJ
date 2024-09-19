package com.example.demo.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.client.RestTemplate;



@Controller
public class WebController {

    // private final String API_BASE_URL = "http://10.48.104.28:8080/api/workoutprograms/workouts/all";

    // @Autowired
    // private RestTemplate restTemplate;

    // @GetMapping("/")
    // public String home(Model model) {
    //     Object[] workouts = restTemplate.getForObject(API_BASE_URL, Object[].class);
    //     model.addAttribute("workouts", workouts);
    //     return "index";
    // }

    // @GetMapping("/courses")
    // public String courses(Model model) {
    //     Object[] workouts = restTemplate.getForObject(API_BASE_URL, Object[].class);
    //     model.addAttribute("workouts", workouts);
    //     return "courses";
    // }
    @GetMapping("/courses")
    public String courses() {
        return "courses";
    }
    @GetMapping("/course_detail")
    public String course_detail() {
        return "course_detail";
    }
    @GetMapping("/layout")
    public String layout() {
        return "layout";
    }


    @GetMapping("/login")
    public String loginForm() {
        return "login";
    }

    @PostMapping("/login")
    public String login() {
        // Handle login logic here
        return "redirect:/dashboard";
    }

    @GetMapping("/signup")
    public String signupForm() {
        return "signup";
    }

    @PostMapping("/signup")
    public String signup() {
        // Handle signup logic here
        return "redirect:/login";
    }

    @GetMapping("/profile")
    public String profile() {
        return "profile";
    }

    @GetMapping("/workout-plan")
    public String workoutPlan(Model model) {
        Object[] workouts = restTemplate.getForObject(API_BASE_URL, Object[].class);
        model.addAttribute("workouts", workouts);
        return "workout_plan";
    }

    @GetMapping("/about")
    public String about() {
        return "about";
    }

    @GetMapping("/contact")
    public String contact() {
        return "contact";
    }

    @GetMapping("/forget-password")
    public String forgetPasswordForm() {
        return "forget_password";
    }

    @PostMapping("/forget-password")
    public String forgetPassword() {
        // Handle forget password logic here
        return "redirect:/login";
    }

    @GetMapping("/workouts")
    public String workouts(Model model) {
        Object[] workouts = restTemplate.getForObject(API_BASE_URL, Object[].class);
        model.addAttribute("workouts", workouts);
        return "workouts";
    }

    @GetMapping("/exercise/{id}")
    public String exerciseDetail(@PathVariable("id") Long id, Model model) {
        // Add logic to fetch exercise details from API and add to model
        Object exercise = restTemplate.getForObject(API_BASE_URL + "/" + id, Object.class);
        model.addAttribute("exercise", exercise);
        return "exercise_detail";
    }

    @GetMapping("/dashboard")
    public String dashboard(Model model) {
        Object[] workouts = restTemplate.getForObject(API_BASE_URL, Object[].class);
        model.addAttribute("workouts", workouts);
        return "dashboard";
    }

    @PostMapping("/profile")
    public String updateProfile() {
        // Handle profile update logic here
        return "redirect:/workout-plan";
    }

    @GetMapping("/logout")
    public String logout() {
        // Handle logout logic here
        return "redirect:/";
    }
    @GetMapping("/your-page")
    public String yourPage(Model model) {
        model.addAttribute("title", "ENERGYM - ระบบออกกำลังกายส่วนตัว");
        return "layout";
    }
   



}