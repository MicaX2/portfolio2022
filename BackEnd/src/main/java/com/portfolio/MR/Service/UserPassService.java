package com.portfolio.MR.Service;

import com.portfolio.MR.Model.UserPassModel;
import com.portfolio.MR.Repository.UserPassRepository;
import java.util.ArrayList;
import java.util.Optional;
import javax.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
@Transactional
public class UserPassService {
    @Autowired
    UserPassRepository userRepository;
    
    public ArrayList<UserPassModel> getUsers(){
        return (ArrayList<UserPassModel>) userRepository.findAll();
    }

    public Optional<UserPassModel> getOne(Long id){
        return userRepository.findById(id);
    }
    
    public UserPassModel saveUser(UserPassModel user){
        return userRepository.save(user);
    }

    public String getPassword(int id) {
        return userRepository.getPasswordById(id);
    }
    public String getMail(int id){
        return userRepository.getMailById(id);
    }

    
}
