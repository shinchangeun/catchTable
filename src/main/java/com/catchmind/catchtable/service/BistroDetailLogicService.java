package com.catchmind.catchtable.service;


import com.catchmind.catchtable.dto.BistroDetailDto;
import com.catchmind.catchtable.repository.BistroDetailRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class BistroDetailLogicService {
    private final BistroDetailRepository bistroDetailRepository;

    public BistroDetailDto detailList(String resaBisname){
        return bistroDetailRepository.findByResAdmin_ResaBisName(resaBisname)
                .map(BistroDetailDto::from).orElseThrow();
    }
//    public List<BistroDetail> bistroList() {
//        return bistroDetailRepository.findAll();
//    }





}

