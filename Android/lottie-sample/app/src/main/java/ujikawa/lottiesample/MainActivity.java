package ujikawa.lottiesample;

import android.databinding.DataBindingUtil;
import android.os.Bundle;
import android.support.v7.app.AppCompatActivity;
import android.view.View;

import ujikawa.lottiesample.databinding.ActivityMainBinding;

public class MainActivity extends AppCompatActivity {

    private boolean clickedFavFlag = false;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

        final ActivityMainBinding binding = DataBindingUtil.setContentView(this, R.layout.activity_main);

        binding.animationView.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                if (clickedFavFlag) {
                    binding.animationView.setProgress(0f);
                    clickedFavFlag = false;
                } else {
                    binding.animationView.playAnimation();
                    clickedFavFlag = true;
                }
            }
        });
    }
}
